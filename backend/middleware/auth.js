const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ── Protect: verifies JWT and attaches user to req ──────────────────────────
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ success: false, error: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Populate the role so permissions are available on req.user.role.permissions
    req.user = await User.findById(decoded.id).populate('role').select('-password');

    if (!req.user) {
      return res.status(401).json({ success: false, error: 'User no longer exists' });
    }

    next();
  } catch (err) {
    return res.status(401).json({ success: false, error: 'Not authorized, token failed' });
  }
};

// ── Permission checker factory ───────────────────────────────────────────────
// Usage: router.get('/something', protect, requirePermission('read'), handler)
// Usage: router.post('/something', protect, requirePermission('write'), handler)
// Usage: router.post('/enroll', protect, requirePermission('execute'), handler)

const requirePermission = (permission) => {
  return (req, res, next) => {
    // Admins (legacy string role) always pass
    if (req.user.role === 'admin' || req.user.legacyRole === 'admin') {
      return next();
    }

    // Check permission on the populated role object
    const roleObj = req.user.role;
    if (!roleObj || !roleObj.permissions) {
      return res.status(403).json({
        success: false,
        error: 'Your account has no role assigned yet. Please contact an admin.'
      });
    }

    if (!roleObj.permissions[permission]) {
      return res.status(403).json({
        success: false,
        error: `Your role "${roleObj.name}" does not have ${permission} permission.`
      });
    }

    next();
  };
};

module.exports = { protect, requirePermission };