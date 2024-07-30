var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

//mocked data
var gameCatalogue = [
    {
        "id": 1,
        "title": "Game B",
        "publisher": "Publisher ABC",
        "developer": "Developer DEF",
        "releaseDate": "2015-01-01",
        "platforms": [
            { "id": 1, "name": "Xbox" },
            { "id": 2, "name": "Playstation" },
            { "id": 3, "name": "PC" }
        ],
        "esrbRating": {
            "id": 1,
            "code": "E",
            "name": "Everyone"
        }
    },
    {
        "id": 2,
        "title": "Game C",
        "publisher": "Publisher A BC",
        "developer": "Developer DEF",
        "releaseDate": "2018-01-01",
        "platforms": [
            { "id": 1, "name": "Xbox" },
            { "id": 3, "name": "PC" }
        ],
        "esrbRating": {
            "id": 1,
            "code": "E",
            "name": "Everyone"
        }
    },
    {
        "id": 3,
        "title": "Game A",
        "publisher": "Publisher ABC",
        "developer": "Developer DEF",
        "releaseDate": "2020-01-01",
        "platforms": [
            { "id": 1, "name": "Xbox" },
            { "id": 2, "name": "Playstation" }
        ],
        "esrbRating": {
            "id": 2,
            "code": "M",
            "name": "Mature"
        }
    }
]




// Define the GraphQL schema
const schema = buildSchema(`
  # Define the Platform type
  type Platform {
    id: Int!
    name: String!
  }

  # Define the ESRB Rating type
  type EsrbRating {
    id: Int!
    code: String!
    name: String!
  }

  # Define the Game type
  type Game {
    id: Int!
    title: String!
    publisher: String!
    developer: String!
    releaseDate: String!  # Use a Date scalar if available
    platforms: [Platform!]!
    esrbRating: EsrbRating!
  }

  # Define the Query type
  type Query {
    # Query to get a list of all games
    games: [Game!]!

    # Query to get a specific game by ID
    game(id: Int!): Game
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    games: () => gameCatalogue,
    game: (_, {id}) => gameCatalogue[id] 
}
;

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');