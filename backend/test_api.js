const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env'), override: true });

const { User, Event, Course } = require('./models');

const testAPI = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, { family: 4 });
    console.log('DB Connected');

    const admin = await User.findOne({ role: 'admin' });
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });

    const BASE_URL = 'http://localhost:5000/api';
    const headers = { Authorization: `Bearer ${token}` };

    console.log('\n--- Checking COURSES ---');
    const resC = await fetch(`${BASE_URL}/admin/entities/list/courses`, { headers });
    const dataC = await resC.json();
    console.log('Courses Count:', dataC.count);
    if (dataC.data && dataC.data.length > 0) {
      console.log('First Course sample:', dataC.data[0].title);
      // Check if it has event-specific fields like startDateTime
      if (dataC.data[0].startDateTime) {
        console.log('WARNING: Course has startDateTime! This might be an event.');
      }
    }

    console.log('\n--- Checking EVENTS ---');
    const resE = await fetch(`${BASE_URL}/admin/entities/list/events`, { headers });
    const dataE = await resE.json();
    console.log('Events Count:', dataE.count);
    if (dataE.data && dataE.data.length > 0) {
      console.log('First Event sample:', dataE.data[0].title);
    }

    process.exit(0);
  } catch (err) {
    console.error('Test failed:', err);
    process.exit(1);
  }
};

testAPI();
