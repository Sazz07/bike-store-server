# Bike Servicing Management API

A comprehensive backend API for a Bike Servicing Management System that allows bike servicing centers to manage customers, bikes, and service records efficiently.

## Live Demo

The API is live at: https://bs-server-tau.vercel.app

## Technologies Used

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL (Neon DB)

## Features

- Customer Management : Create, read, update, and delete customer information
- Bike Management : Add and retrieve bike information
- Service Management : Create service records, mark services as completed
- Overdue Service Tracking : Identify services that are pending or in-progress for more than 7 days
- Standardized Error Handling : Consistent error response structure

## Database Schema

The application uses Prisma ORM with PostgreSQL and implements the following schema:

1. Customer Table

   - UUID primary key
   - Customer details (name, email, phone)
   - Timestamp tracking

2. Bike Table

   - UUID primary key
   - Bike details (brand, model, year)
   - Foreign key to Customer

3. ServiceRecord Table

   - UUID primary key
   - Service details (dates, description, status)
   - Foreign key to Bike

## API Endpoints

### Customer Management

- POST /api/customers - Create a new customer
- GET /api/customers - Get all customers
- GET /api/customers/:id - Get a specific customer
- PUT /api/customers/:id - Update customer details
- DELETE /api/customers/:id - Delete a customer

### Bike Management

- POST /api/bikes - Add a new bike
- GET /api/bikes - Get all bikes
- GET /api/bikes/:id - Get a specific bike

### Service Management

- POST /api/services - Create a service record
- GET /api/services - Get all service records
- GET /api/services/:id - Get a specific service record
- PUT /api/services/:id/complete - Mark a service as completed
- GET /api/services/status - Get pending or overdue services (older than 7 days)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository

```bash
git clone https://github.com/Sazz07/bike-store-server.git
cd bike-store-server
```

````

2. Install dependencies
```bash
yarn install
# or
npm install
````

3. Set up environment variables

   Create a .env file in the root directory based on the .env.example file:

```plaintext
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=development
PORT=5000
```

````

4. Run database migrations
```bash
npx prisma migrate dev
````

5. Start the development server

```bash
yarn dev
# or
npm run dev
```

The server will start on the port specified in your .env file (default: 5000).

## API Testing

A Postman collection is included in the repository for testing the API endpoints. Import the Bike-Store.postman_collection.json file into Postman to get started.

The collection includes requests for:

- Creating, retrieving, updating, and deleting customers
- Adding and retrieving bikes
- Creating service records and marking them as completed
- Checking for overdue services

## Deployment

The project is configured for deployment on Vercel. The vercel.json file contains the necessary configuration.

To deploy:

1. Install Vercel CLI: npm i -g vercel
2. Run: vercel

## Project Structure

```plaintext
bike-store-server/
├── prisma/                  # Prisma schema and migrations
├── src/
│   ├── app/                 # Application modules
│   │   ├── modules/         # Feature modules (Customer, Bike, ServiceRecord)
│   │   ├── routes/          # API routes
│   │   └── middlewares/     # Express middlewares
│   ├── config/              # Configuration files
│   ├── shared/              # Shared utilities
│   ├── app.ts               # Express app setup
│   └── server.ts            # Server entry point
├── .env                     # Environment variables (not in repo)
├── .env.example             # Example environment variables
└── package.json             # Project dependencies and scripts
```
