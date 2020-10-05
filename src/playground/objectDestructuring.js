const person = {
  name: "Abishek",
  age: 22,
  location: {
    city: "Ranipet",
    temp: 42,
  },
  skills: {
    os: "linux",
    lang: "Javascript",
  },
};

// default value
// const { name = "Anonymous", age } = person;

// default and a custom variable name
const { name: firstName = "Anonymous", age } = person;

const { city, temp } = person.location;

// custom variable name
const { os, lang: language } = person.skills;

console.log(`${firstName} is ${age}`);

console.log(`It is ${temp} in ${city}`);

console.log(
  `${firstName} is skilled in ${os} operating system and ${language}`
);

const book = {
  title: "A Wanted Man",
  author: "Lee Child",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self-published" } = book.publisher;

console.log(publisherName);

