# Student Mock API

A mock API for student dashboard built with json-server and deployed on Vercel as a serverless function.

## Project Structure

- `server.js` - The main server file that configures json-server for both local development and Vercel serverless deployment
- `db.json` - The mock database file containing student data
- `vercel.json` - Configuration for Vercel deployment
- `package.json` - Project dependencies and scripts

## Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```
   This will start json-server on port 5000 with the mock data from db.json.

## Deployment on Vercel

This project is configured to be deployed as a serverless function on Vercel. The `vercel.json` file contains the necessary configuration for routing and builds.

### Troubleshooting Deployment Issues

If you encounter a 500 INTERNAL_SERVER_ERROR with code FUNCTION_INVOCATION_FAILED, check the following:

1. **Server Configuration**: Ensure that `server.js` properly exports the server as a serverless function handler with the correct request/response handling.

2. **CORS Headers**: Make sure CORS headers are properly set for API requests.

3. **Node.js Version**: Verify that the Node.js version specified in `package.json` is compatible with Vercel.

4. **Environment Variables**: Check that all required environment variables are set in the Vercel dashboard or in `vercel.json`.

5. **Deployment Logs**: Review the deployment logs in the Vercel dashboard for specific error messages.

## API Endpoints

- `GET /students` - Get all students
- `GET /students/:id` - Get a specific student by ID
- `POST /students` - Create a new student
- `PUT /students/:id` - Update a student
- `DELETE /students/:id` - Delete a student

## Notes

- The API is configured to handle CORS requests from any origin.
- For production deployments, you may want to restrict CORS to specific origins.
- The serverless function is optimized for Vercel's environment with proper request/response handling.