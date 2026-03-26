const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env'), override: true });

const listCollections = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { family: 4 });
    console.log('DB Connected');

    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections:', collections.map(c => c.name));

    for (const col of collections) {
      const data = await mongoose.connection.db.collection(col.name).find().limit(1).toArray();
      console.log(`Sample from ${col.name}:`, data.length > 0 ? (data[0].title || data[0].name || 'No title/name') : 'Empty');
    }

    process.exit(0);
  } catch (err) {
    console.error('Failed to list collections:', err);
    process.exit(1);
  }
};

listCollections();
