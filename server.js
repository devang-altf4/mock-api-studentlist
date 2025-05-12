// Importing json-server
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // This is your mock database file
const middlewares = jsonServer.defaults();

// Set up middlewares
server.use(middlewares);

// Use the router with the mock data (db.json)
server.use(router);

// Start the server on the given port (use PORT from environment variables, fallback to 5000)
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
