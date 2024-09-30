# Security Company Management Application

## Introduction

This application is designed to manage security companies and their associated data. It provides functionalities to create and read security companies, as well as manage their prices and trends. The application uses a GraphQL API for data interaction.

## Features

- Create and read security companies.
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
   git clone https://github.com/weichner/engineai_project
   cd backend
   npm install
   npm run start
   ```

## Seeding the data base

1. Use this command:

```
  npx ts-node -r tsconfig-paths/register ./src/database/clear-database.ts
```

## GraphQL Usage

1. Open your browser and navigate to `http://localhost:3001/graphql`.
2. Use the GraphQL playground to make queries and mutations.

### Example Querie

- Fetch all securities companies:
  ```query GetSecurities {
    securities {
      id
      ticker
      securityName
      sector
      country
      trend
      trendColor
      prices {
        close
        volume
        date
      }
    }
  }
  ```

Feel free to customize the content as per your specific project details.
