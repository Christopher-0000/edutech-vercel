const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const eventRoutes = require('./routes/eventRoutes');
const blogRoutes = require('./routes/blogRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const roleRoutes = require('./routes/roleRoutes');
const adminRouter = require('./admin/adminConfig');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || 'http://localhost:3000',
      'http://localhost:5173',
      'http://localhost:5174',
    ],
    credentials: true,
  })
);

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve admin panel HTML
app.get('/admin-panel', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'admin-panel.html'));
});

// File upload route
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() +
      '-' +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, uniqueName);
  },
});
const upload = multer({ storage, limits: { fileSize: 100 * 1024 * 1024 } });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ success: true, filepath: req.file.path.replace(/\\/g, '/') });
});

// Connect to MongoDB — this runs once per cold start in serverless
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));

// Admin API
app.use('/admin', adminRouter);

// Serve roles admin page
app.get('/admin/roles', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'roles.html'));
});

// Users list as JSON (used by roles admin page)
app.get('/admin/users/json', async (req, res) => {
  const User = require('./models/User');
  const users = await User.find().populate('role').select('-password');
  res.json({ success: true, users });
});

// API root & routes
app.get('/', (req, res) => {
  res.json({
    message: 'EduTech API is running!',
    endpoints: {
      auth: '/api/auth',
      courses: '/api/courses',
      events: '/api/events',
      blog: '/api/blog',
      admin: '/admin',
      adminPanel: '/admin-panel',
    },
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/roles', roleRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  });
});

module.exports = app;

