import { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContext from "../Hooks/useBooksContext";

function BookShow({ book }) {
  const { deleteBook, EditBookById } = useBookContext();
  const [showEdit, setShowEdit] = useState(true);

  //Deleting bookid
  const handleDelte = () => {
    deleteBook(book.id);
  };

  //Editing mode
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  // Updating Title
  const handleSubmit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="book-show">
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelte}>
          Delete
        </button>
      </div>
      {showEdit ? (
        <div>
          <img
            alt="books"
            src={`https://picsum.photos/seed/${book.id}/300/200`}
          />
          {book.id}:{book.title}
        </div>
      ) : (
        <BookEdit book={book} handleSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default BookShow;
