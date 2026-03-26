const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env'), override: true });

async function debugDB() {
  try {
    console.log('1. DB URI exists:', !!process.env.MONGODB_URI);
    console.log('2. Connecting...');
    await mongoose.connect(process.env.MONGODB_URI, { 
      family: 4,
      serverSelectionTimeoutMS: 5000 
    });
    console.log('3. Connected');
    
    const admin = mongoose.connection.db.admin();
    const result = await admin.listDatabases();
    console.log('4. Databases:', result.databases.map(d => d.name));
    
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    console.log('5. Collections in current DB:', collections.map(c => c.name));
    
    for (const cName of collections.map(c => c.name)) {
        const count = await db.collection(cName).countDocuments();
        console.log(`   - ${cName}: ${count}`);
    }

    process.exit(0);
  } catch (err) {
    console.error('ERROR:', err);
    process.exit(1);
  }
}

debugDB();
