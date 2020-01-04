import axios from 'axios';

const BASE_URL = 'https://yts.lt/api/v2/'
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAIL_URL = `${BASE_URL}movie_details.json`;

export const getMovies = async (limit = 0, rating = 0) => 
{
  const { data: { data: { movies } } } = await axios(LIST_MOVIES_URL, {
    params: { limit, minimum_rating: rating }
  });
  return movies;
}

export const getMovie = async id => {
  const { data: { data: { movie } } } = await axios(MOVIE_DETAIL_URL, {
    params: { movie_id: id }
  });
  return movie;
}