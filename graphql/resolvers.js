import { getMovies, getById } from './db.js';

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getById(id)
  }
};

export default resolvers;