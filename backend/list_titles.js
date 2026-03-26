const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env'), override: true });

async function listTitles() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { family: 4 });
    const db = mongoose.connection.db;
    
    console.log('--- COURSES ---');
    const courses = await db.collection('courses').find().toArray();
    courses.forEach(c => console.log(`- ${c.title} (ID: ${c._id})`));
    
    console.log('\n--- EVENTS ---');
    const events = await db.collection('events').find().toArray();
    events.forEach(e => console.log(`- ${e.title} (ID: ${e._id})`));
    
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

listTitles();
