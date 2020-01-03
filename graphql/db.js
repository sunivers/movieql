import axios from 'axios';

const API_URL = 'https://yts.lt/api/v2/list_movies.json';

export const getMovies = async (limit = 0, rating = 0) => 
{
  const { data: { data: { movies } } } = await axios(API_URL, {
    params: { limit, minimum_rating: rating }
  });
  return movies;
}

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
}