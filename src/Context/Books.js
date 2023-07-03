import { createContext, useState, useCallback } from "react";
import axios from "axios";
const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  //Fetch All Book on Refresh
  //to resolve useEffect Bug we use useCallback to call stop running the fetchbook function again n again

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  //Create method
  const updateTitle = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updateBooks = [...books, response.data];
    setBooks(updateBooks);
  };

  //delete method
  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updateBooks);
  };

  //Update Method
  const EditBookById = async (id, newTile) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTile,
    });
    const editBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(editBooks);
  };

  const valueToShare = {
    books,
    EditBookById,
    deleteBook,
    updateTitle,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
