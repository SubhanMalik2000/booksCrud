import { useState } from "react";
function BookCreate({ getTitle }) {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getTitle(title);
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
