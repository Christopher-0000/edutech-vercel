// Vercel Serverless Function entrypoint.
// Wrap the existing Express app so all routes work under /api on Vercel.

const app = require('../app');

module.exports = (req, res) => {
  return app(req, res);
};

