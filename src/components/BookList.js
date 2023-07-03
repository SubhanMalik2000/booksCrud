import BookShow from "./BookShow";
import useBookContext from "../Hooks/useBooksContext";

function BookList() {
  const { books } = useBookContext();
  const bookRender = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{bookRender}</div>;
}

export default BookList;
