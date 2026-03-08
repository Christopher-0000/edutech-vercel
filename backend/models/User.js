const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false
  },
  firstName:   { type: String, trim: true },
  lastName:    { type: String, trim: true },
  phone:       { type: String },
  address:     { type: String },
  gender:      { type: String },
  dateOfBirth: { type: Date },

  // RBAC — admin assigns a Role document after signup
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    default: null
  },

  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// ── Hash password before saving ──────────────────────────────────────────────
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// ── Compare entered password with stored hash ────────────────────────────────
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// ── Alias so authController works with both names ───────────────────────────
userSchema.methods.matchPassword = userSchema.methods.comparePassword;

// ── Generate signed JWT ──────────────────────────────────────────────────────
userSchema.methods.getSignedToken = function () {
  return jwt.sign(
    { id: this._id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '30d' }
  );
};

// ── Return safe public profile (no password) ────────────────────────────────
userSchema.methods.getPublicProfile = function () {
  return {
    _id:         this._id,
    username:    this.username,
    email:       this.email,
    firstName:   this.firstName,
    lastName:    this.lastName,
    phone:       this.phone,
    address:     this.address,
    gender:      this.gender,
    dateOfBirth: this.dateOfBirth,
    role:        this.role,   // populated Role object or null
    isActive:    this.isActive,
    createdAt:   this.createdAt
  };
};

module.exports = mongoose.model('User', userSchema);