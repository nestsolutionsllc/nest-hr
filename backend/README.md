# Backend of Pinecone HR system

## Setup

1. Install Node version `16.x` (via nvm or other) and ensure the project uses one a compatible version locally

2. Run `yarn` to install dependencies

3. Create `.env` file with following content:

```
MONGODB_URL=mongodb://localhost:27017/nest_hr # or Mongodb Atlas connection string
```

(MongoDB atlas connection string can be used)

4. Run `yarn start` to run.

5. Ready to check endpoint using Postman.

```
http://localhost:5000/movies (GET)
http://localhost:5000/movie (POST)
http://localhost:5000/movie/:id (GET)
http://localhost:5000/movie/:id (PATCH)
http://localhost:5000/movie (DELETE)
```

## Testing

In local environment, we need to start MongoDB server on `localhost:27017`.

Run `yarn test` for testing.
`yarn coverage` for coverage.
