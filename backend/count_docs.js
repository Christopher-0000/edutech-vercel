const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env'), override: true });

const { Course, Event } = require('./models');

const countDocs = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { family: 4 });
    console.log('DB Connected');

    const courseCount = await Course.countDocuments();
    const eventCount = await Event.countDocuments();

    console.log(`COURSES count: ${courseCount}`);
    console.log(`EVENTS count: ${eventCount}`);

    if (courseCount > 0) {
        const c = await Course.findOne();
        console.log(`Course sample title: ${c.title}, has startDateTime: ${!!c.startDateTime}`);
    }

    process.exit(0);
  } catch (err) {
    console.error('Failed to count docs:', err);
    process.exit(1);
  }
};

countDocs();
