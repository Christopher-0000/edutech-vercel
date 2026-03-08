const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  permissions: {
    read:    { type: Boolean, default: false }, // view courses, blogs, events
    write:   { type: Boolean, default: false }, // create/edit courses, blogs, events
    execute: { type: Boolean, default: false }  // enroll in courses, register for events
  },
  isDefault: {
    type: Boolean,
    default: false // if true, new signups automatically get this role
  }
}, { timestamps: true });

module.exports = mongoose.model('Role', roleSchema);