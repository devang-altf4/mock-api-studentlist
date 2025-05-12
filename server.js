// Importing json-server
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // This is your mock database file
const middlewares = jsonServer.defaults();

// Set up middlewares
server.use(middlewares);

// Use the router with the mock data (db.json)
server.use(router);

// For local development
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
  });
}

// Handle Vercel serverless function requests
module.exports = (req, res) => {
  // Set CORS headers for API requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  // Handle OPTIONS method for preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  // Forward the request to json-server
  return server(req, res);
};
