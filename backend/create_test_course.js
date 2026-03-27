const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env'), override: true });

const { Course, Category } = require('./models');

const createTestCourse = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { family: 4 });
    console.log('DB Connected');

    let cat = await Category.findOne();
    if (!cat) {
      cat = await Category.create({ name: 'Development' });
      console.log('Created category');
    }

    const testCourse = await Course.create({
      title: 'TEST_COURSE_999',
      description: 'This is a test course to check admin panel',
      category: cat._id,
      courseType: 'free',
      level: 'beginner'
    });

    console.log(`Created test course: ${testCourse.title} (${testCourse._id})`);
    console.log(`Collection: ${Course.collection.name}`);

    process.exit(0);
  } catch (err) {
    console.error('Failed to create test course:', err);
    process.exit(1);
  }
};

createTestCourse();
