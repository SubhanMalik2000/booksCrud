import { useState } from "react";
import useBookContext from "../Hooks/useBooksContext";

function BookEdit({ book, handleSubmit }) {
  const { EditBookById } = useBookContext();
  const [saveEdit, setSaveEdit] = useState(book.title);

  const handleChange = (e) => {
    setSaveEdit(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(false);
    EditBookById(book.id, saveEdit);
  };

  //update Method
  return (
    <div>
      <form onSubmit={onSubmit} className="book-edit">
        <label>Title</label>
        <input value={saveEdit} onChange={handleChange} className="input" />
        <button className="button is-primary">Update</button>
      </form>
    </div>
  );
}

export default BookEdit;
