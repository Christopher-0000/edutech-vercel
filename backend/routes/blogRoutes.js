const express = require('express');
const router = express.Router();
const {
  getBlogPosts,
  getBlogPost,
  getFeaturedPosts,
  getCategories,
  getTags,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
} = require('../controllers/blogController');
const { protect, requirePermission } = require('../middleware/auth');

// Public routes
router.get('/', getBlogPosts);
router.get('/featured', getFeaturedPosts);
router.get('/categories', getCategories);
router.get('/tags', getTags);
router.get('/:slug', getBlogPost);

// Protected routes
router.post('/', protect, requirePermission('write'), createBlogPost);
router.put('/:slug', protect, requirePermission('write'), updateBlogPost);
router.delete('/:slug', protect, requirePermission('write'), deleteBlogPost);

module.exports = router;
