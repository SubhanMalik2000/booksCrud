import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const bookRender = books.map((book, value) => {
    return (
      <BookShow onDelete={onDelete} index={value} book={book} onEdit={onEdit} />
    );
  });
  return <div className="book-list">{bookRender}</div>;
}

export default BookList;
