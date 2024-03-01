# Fxpal_Task Application Documentation

## Introduction
This document provides instructions for setting up and running the Application. The Application is a basic transaction management system built using Nest.js, grpc and mongodb.

## Prerequisites
Before starting, ensure you have the following installed on your machine:
- Node.js and npm (Node Package Manager)
- MongoDB

## Installation
1. Clone the repository from GitHub:
   ```
   git clone https://github.com/isholajanet/fxpal_task.git
   ```
2. Navigate to the project directory:
   ```
   cd fxpal_task
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Configuration
- Configure MongoDB connection settings in the `.env` file.


## Database Setup
1. Start MongoDB service:
   ```
   mongod
   ```
2. Create a new database named `fintech`:
   ```
   update the sample.env file to use your own mongodb url and change the name to .env
   ```
   use fintechdb
   ```

## Running the Application
1. Start the Nest.js server:
   ```
   npm start
   ```

2. The application will be running at `http://localhost:3000`.

3. The gRPC server will be running on port `50051`.

4. The swagger endpoint will be running on port `http://localhost:3000/api/` (This will open the Swagger UI interface, where you can see a list of available endpoints, request/response schemas)

## API Endpoints
- GET /transactions: Get all transactions.
- POST /transactions: Create a new transaction.
- GET /transactions/{id}: Get a transaction by ID.
- PUT /transactions/{id}: Update a transaction by ID.
- DELETE /transactions/{id}: Delete a transaction by ID.

## Testing
- Run tests using the following command:
  ```
  npm test
  ```



## References
- Nest.js documentation: [https://nestjs.com](https://nestjs.com)
- MongoDB documentation: [https://docs.mongodb.com](https://docs.mongodb.com)
- Grpc documentation: [https://grpc.io/docs/](https://grpc.io/docs/)
- GitHub repository: [https://github.com/isholajanet/fxpal_task.git](https://github.com/isholajanet/fxpal_task.git)

## Conclusion
You have successfully set up and run the Application. Refer to this documentation for guidance on usage and troubleshooting.
