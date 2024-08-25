Here’s a README for your Express.js project that integrates GraphQL:

---

# Express.js GraphQL API for Game Catalogue

This project is a simple GraphQL API built with Express.js and the `express-graphql` package. It allows querying and interacting with a mocked catalogue of video games.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [GraphQL Schema](#graphql-schema)
- [GraphQL Queries](#graphql-queries)
- [Testing the API](#testing-the-api)
- [Dependencies](#dependencies)
- [License](#license)

## Project Overview

This project sets up a GraphQL server to manage a catalogue of video games. It includes basic queries to retrieve information about games and their details.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mabass2110/express-graphQL 
    cd express-graphQL
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```

   The server will be running at `http://localhost:4000/graphql`.

### Configuration

The GraphQL server is configured to use the schema and resolvers defined in the code. The data is mocked and does not persist between server restarts.

## GraphQL Schema

The GraphQL schema is defined with the following types:

- **Platform**: Represents a gaming platform.
- **EsrbRating**: Represents the ESRB rating of a game.
- **Game**: Represents a video game with various attributes such as title, publisher, developer, release date, platforms, and ESRB rating.

### Query Type

- **games**: Retrieves a list of all games.
- **game(id: Int!)**: Retrieves a specific game by its ID.

## GraphQL Queries

You can use the following queries in GraphiQL (available at `http://localhost:4000/graphql`) to interact with the API:

### Query All Games

```graphql
{
  games {
    id
    title
    publisher
    developer
    releaseDate
    platforms {
      id
      name
    }
    esrbRating {
      id
      code
      name
    }
  }
}
```

### Query a Specific Game by ID

```graphql
{
  game(id: 1) {
    id
    title
    publisher
    developer
    releaseDate
    platforms {
      id
      name
    }
    esrbRating {
      id
      code
      name
    }
  }
}
```

## Testing the API

To test the API:

1. Open a web browser and navigate to `http://localhost:4000/graphql`.
2. Use the GraphiQL interface to run queries and explore the schema.

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `express-graphql`: Provides GraphQL middleware for Express.
- `graphql`: A query language for your API and a runtime for executing queries.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

