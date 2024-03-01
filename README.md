# Sample Application Documentation

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
   use sampledb
   ```

## Running the Application
1. Start the Nest.js server:
   ```
   npm start
   ```

2. The application will be running at `http://localhost:3000`.

3. The gRPC server will be running on port `50051`.


## Testing
- Run tests using the following command:
  ```
  npm test
  ```



## References
- Nest.js documentation: [https://nestjs.com](https://nestjs.com)
- MongoDB documentation: [https://docs.mongodb.com](https://docs.mongodb.com)
- GitHub repository: [https://github.com/your-username/sample-application](https://github.com/your-username/sample-application)

## Conclusion
You have successfully set up and run the Application. Refer to this documentation for guidance on usage and troubleshooting.
