const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env'), override: true });

const { Event, EventRegistration, User } = require('./models');

const checkDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');

    const eventCount = await Event.countDocuments();
    const regCount = await EventRegistration.countDocuments();
    console.log(`Events: ${eventCount}, Registrations: ${regCount}`);

    const events = await Event.find().limit(5);
    events.forEach(e => {
      console.log(`Event: ${e.title}, ID: ${e._id}, type: ${typeof e._id}`);
    });

    if (events.length > 0) {
      const eid = events[0]._id;
      const regs = await EventRegistration.find({ event: eid });
      console.log(`Found ${regs.length} registrations for first event`);
    }

    process.exit(0);
  } catch (err) {
    console.error('Check failed:', err);
    process.exit(1);
  }
};

checkDB();
