export const people = [
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

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
}