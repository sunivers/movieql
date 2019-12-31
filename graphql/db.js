let movies = [
  {
    id: 1,
    name: "Avengers",
    score: 85,
  },
  {
    id: 2,
    name: "Notebook",
    score: 90,
  },
  {
    id: 3,
    name: "Frozen2",
    score: 92,
  },
  {
    id: 4,
    name: "Logan",
    score: 83,
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
}

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if(movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  }
  return false;
}