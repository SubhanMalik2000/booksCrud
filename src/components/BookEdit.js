import { useState } from "react";
function BookEdit({ book, onEdit, index, changeMode, editboolean }) {
  const [saveEdit, setSaveEdit] = useState(book.title);
  const handleChange = (e) => {
    setSaveEdit(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("new Title is", { index, saveEdit });
    onEdit(index, saveEdit);
    changeMode(!editboolean);
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
