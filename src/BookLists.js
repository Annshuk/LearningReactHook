import React, { useState } from 'react';

const books = ['Life of pi'];

const Book = ({ label }) => <li> {label} </li>;

const BookLists = () => {
  const [bookLists, setBooksData] = useState(books);

  const toggleBookList = () => {
    if (!!bookLists.length) {
      setBooksData([]);

      return;
    }

    setBooksData(books);
  };

  return (
    <section className="booklist">
      <ul>
        {bookLists.map((book, index) => (
          <Book key={`${book}_${index}`} label={book} />
        ))}
      </ul>

      <button onClick={toggleBookList}>
        {bookLists.length === 0 ? 'Show Books' : 'Hide Books'}
      </button>
    </section>
  );
};

export { BookLists };
