import { useState } from "react";
import useBookContext from "../Hooks/useBooksContext";

function BookCreate() {
  const { updateTitle } = useBookContext();
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateTitle(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add Books</h3>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input value={title} className="input" onChange={handleChange} />
        <button className="button">Add Books</button>
      </form>
    </div>
  );
}

export default BookCreate;
