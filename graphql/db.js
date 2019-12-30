let movies = [
  {
    id: 1,
    name: "Soyoung",
    age: 29,
    gender: "female"
  },
  {
    id: 2,
    name: "Eunyoung",
    age: 32,
    gender: "female"
  },
  {
    id: 3,
    name: "Youngran",
    age: 59,
    gender: "female"
  },
  {
    id: 4,
    name: "Chanki",
    age: 29,
    gender: "male"
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
}

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if(movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  }
  return false;
}