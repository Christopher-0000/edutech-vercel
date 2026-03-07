const { Category } = require('../models/CategoryTag');

/**
 * GET /api/categories
 * Returns all categories from the CategoryTag model.
 */
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 }).lean();
    res.json({ categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

module.exports = { getCategories };
