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

// Export the server as a module for Vercel serverless functions
module.exports = server;
