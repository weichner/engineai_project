# Security Company Management Application

## Introduction

This application is designed to manage security companies and their associated data. It provides functionalities to create, read, update, and delete security companies, as well as manage their prices and trends. The application uses a GraphQL API for data interaction.

## Features

- Create, read, update, and delete security companies.
- Manage prices associated with security companies.
- Calculate and display trend colors based on price trends.
- GraphQL API for data interaction.

## Technologies Used

- TypeScript
- Node.js
- NestJS
- TypeORM
- PostgreSQL
- GraphQL

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/security-company-management.git
   cd backend
   npm install
   npm run start
   ```

## GraphQL Usage

1. Open your browser and navigate to `http://localhost:3001/graphql`.
2. Use the GraphQL playground to make queries and mutations.

### Example Querie

- Fetch a security company by ID:
  ```graphql
  query {
    securityCompany(id: 1) {
      id
      name
      prices {
        date
        value
      }
      trendColor
    }
  }
  ```

Feel free to customize the content as per your specific project details.
