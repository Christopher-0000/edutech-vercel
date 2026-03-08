const express = require('express');
const router = express.Router();
const { protect, requirePermission } = require('../middleware/auth');
const { getCourses, getCourse, enrollCourse, getMyCourses, getFeaturedCourses } = require('../controllers/courseController');

router.get('/', requirePermission('read'), getCourses);
router.get('/featured', getFeaturedCourses);
router.get('/my/courses', protect, getMyCourses);
router.get('/:id', protect, requirePermission('read'), getCourse);
router.post('/:id/enroll', protect, requirePermission('execute'), enrollCourse);

module.exports = router;