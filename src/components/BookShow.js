import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, index, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(true);

  //Deleting bookid
  const handleDelte = () => {
    onDelete(book.id);
  };

  //Editing mode
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  // Updating Title
  const UpdatingShow = (editedBook) => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="book-show" key={index}>
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
            src={`https://picsum.photos/seed/${index}/300/200`}
          />
          {(book.id = index)}:{book.title}
        </div>
      ) : (
        <BookEdit
          index={index}
          onEdit={onEdit}
          book={book}
          changeMode={UpdatingShow}
          editboolean={setShowEdit}
        />
      )}
    </div>
  );
}

export default BookShow;
