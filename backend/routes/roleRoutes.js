const express = require('express');
const router = express.Router();
const {
  getRoles,
  getRole,
  createRole,
  updateRole,
  deleteRole,
  assignRoleToUser
} = require('../controllers/roleController');

// All role routes are admin-only (protected by adminAuth middleware in server.js)
router.get('/',           getRoles);
router.get('/:id',        getRole);
router.post('/',          createRole);
router.put('/assign',     assignRoleToUser);   // PUT /api/roles/assign
router.put('/:id',        updateRole);
router.delete('/:id',     deleteRole);

module.exports = router;