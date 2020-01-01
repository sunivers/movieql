import fetch from 'node-fetch';

const API_URL = 'https://yts.lt/api/v2/list_movies.json';

export const getMovies = (limit = 0, rating = 0) => 
{
  let REQUEST_URL = `${API_URL}?limit=${limit}&minimum_rating=${rating}`;
  
  return fetch(REQUEST_URL)
  .then(res => res.json())
  .then(json => json.data.movies);
}

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
}