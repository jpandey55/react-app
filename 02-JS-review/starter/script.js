const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructure

const book = getBook(1);
// const title = book.title;
// const author = book.author;
// console.log(title, author);

const { title, author, pages, translations, genres } = book;
console.log(title, author, translations.chinese, pages);

//Rest
const [primaryGenre, secondaryGenre, ...otherGenre] = genres;
console.log(primaryGenre, secondaryGenre, otherGenre);

const newGenre = [...genres, "classical"];
newGenre;

//Spread
const updateBook = {
  ...book,
  //Adding a new property
  moviePublicationDate: "2001-12-19",
  //Overriding an existing property
  pages: 1210,
};
updateBook;

//template literal

const summary = `${2 + 7}. ${title} is a book, has ${pages}`;
summary;

const pagesRange = pages > 1000 ? "more than thousand" : "less than thousand";
pagesRange;

//Arrow function
str = "2023-10-12";

function getYear(str) {
  return str.split("-")[0];
}

const getYearLambda = (str) => str.split("-")[0];

console.log(getYear(str));
console.log(getYearLambda(str));

//falsy: 0, '', undefined, null

console.log("jonas" && "some string");
console.log("" && "some string");

//Optional chaining
const newbook = getBook(3);
console.log(getTotalCount(newbook));
function getTotalCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

//Array

const books = getBooks();

const x = [1, 2, 3, 5].map((e) => e * 2);
x;

const titles = books.map((e) => e.title);
titles;

const essentialFiels = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

essentialFiels;

const movieAdaption = books.filter((e) => e.hasMovieAdaptation);
movieAdaption;

const totalPages = books.reduce(
  (accumulator, book) => accumulator + book.pages,
  0
);
totalPages;

//Sort : mutates the original array
let arr1 = [1, 5, 2, 3, 0, -1];
let arr2 = arr1.sort((a, b) => a - b);
arr1;
arr2;

arr1 = [1, 5, 2, 3, 0, -1];
arr2 = arr1.slice().sort((a, b) => a - b);
arr1;
arr2;

//1. Add book object to books

books;
const newBook = {
  id: 6,
  title: "Harry Potter",
  author: "JK Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

const addInFront = [newBook, ...books];
addInFront;

//2. Delete a book from books

const booksAfterDelete = books.filter((book) => book.id != 6);
booksAfterDelete;

//3. Update a book element
const afterUpdate = books.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
afterUpdate;



// Promises

fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(json => console.log(json));
      
console.log("After API call");


// Async/Await

console.log("Before Await API call");
async function callRestAPI() {
  await fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
  
}
callRestAPI();
console.log("After Await API call");