const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const User = require('./models/User');
const Role = require('./models/Role');

async function createAdmin() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Create admin role if it doesn't exist
  let role = await Role.findOne({ name: 'admin' });
  if (!role) {
    role = await Role.create({ name: 'admin', permissions: [] });
    console.log('Admin role created');
  }

  // Delete existing admin if broken
  await User.deleteOne({ email: 'admin@edutech.com' });

  // Create admin user
  const user = await User.create({
    username: 'admin',
    email: 'admin@edutech.com',
    password: 'admin123',
    firstName: 'Admin',
    lastName: 'User',
    role: role._id,
  });

  console.log('Admin user created ✅', user.email);
  mongoose.disconnect();
}

createAdmin().catch(console.error);