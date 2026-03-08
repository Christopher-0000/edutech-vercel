const Role = require('../models/Role');
const User = require('../models/User');

// GET all roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find().sort({ createdAt: 1 });
    res.json({ success: true, roles });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// GET single role
exports.getRole = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) return res.status(404).json({ success: false, error: 'Role not found' });
    res.json({ success: true, role });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// POST create role
exports.createRole = async (req, res) => {
  try {
    const { name, permissions, isDefault } = req.body;

    // If this new role is marked as default, unset any existing default
    if (isDefault) {
      await Role.updateMany({}, { isDefault: false });
    }

    const role = await Role.create({
      name,
      permissions: {
        read:    permissions?.read    || false,
        write:   permissions?.write   || false,
        execute: permissions?.execute || false
      },
      isDefault: isDefault || false
    });

    res.status(201).json({ success: true, role });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ success: false, error: 'A role with that name already exists' });
    }
    res.status(500).json({ success: false, error: err.message });
  }
};

// PUT update role
exports.updateRole = async (req, res) => {
  try {
    const { name, permissions, isDefault } = req.body;

    // If this role is being set as default, unset all others first
    if (isDefault) {
      await Role.updateMany({ _id: { $ne: req.params.id } }, { isDefault: false });
    }

    const role = await Role.findByIdAndUpdate(
      req.params.id,
      {
        name,
        permissions: {
          read:    permissions?.read    || false,
          write:   permissions?.write   || false,
          execute: permissions?.execute || false
        },
        isDefault: isDefault || false
      },
      { new: true, runValidators: true }
    );

    if (!role) return res.status(404).json({ success: false, error: 'Role not found' });
    res.json({ success: true, role });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// DELETE role
exports.deleteRole = async (req, res) => {
  try {
    // Check if any users have this role before deleting
    const usersWithRole = await User.countDocuments({ role: req.params.id });
    if (usersWithRole > 0) {
      return res.status(400).json({
        success: false,
        error: `Cannot delete: ${usersWithRole} user(s) currently have this role. Reassign them first.`
      });
    }

    const role = await Role.findByIdAndDelete(req.params.id);
    if (!role) return res.status(404).json({ success: false, error: 'Role not found' });

    res.json({ success: true, message: 'Role deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// PUT assign role to a user (called from admin panel)
exports.assignRoleToUser = async (req, res) => {
  try {
    const { userId, roleId } = req.body;

    const role = await Role.findById(roleId);
    if (!role) return res.status(404).json({ success: false, error: 'Role not found' });

    const user = await User.findByIdAndUpdate(
      userId,
      { role: roleId },
      { new: true }
    ).populate('role');

    if (!user) return res.status(404).json({ success: false, error: 'User not found' });

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};