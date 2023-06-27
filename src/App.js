import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
  const [books, setBooks] = useState([]);

  //Create method
  const updateTitle = (title, id) => {
    // console.log("parent get update from child", title);
    const updateBooks = [...books, { id, title }];
    setBooks(updateBooks);
  };

  //delete method
  const deleteBook = (id) => {
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updateBooks);
  };

  //Update Method
  const EditBookById = (id, newTile) => {
    const editBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTile };
      }

      return book;
    });

    setBooks(editBooks);
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBook} onEdit={EditBookById} />
      <BookCreate getTitle={updateTitle} />
    </div>
  );
}

export default App;
