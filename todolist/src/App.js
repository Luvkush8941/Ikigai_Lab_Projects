import { useState } from "react";
import "./style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      if (editIndex !== -1) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = inputValue;
        setTodos(updatedTodos);
        setEditIndex(-1);
      } else {
        setTodos([...todos, inputValue]);
      }
      setInputValue("");
    }
  };

  const handleEdit = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1 className="top">Add and Edit Todo</h1>
      <div className="main">
        <div className="container">
        <h1 className="todo_head">Todo List</h1>
          <div className="todo_top">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add a todo..."
            className="form-control"
          />
          <button onClick={handleAddTodo} className="btn">
            {editIndex !== -1 ? "Edit" : "Add"}
          </button>  
          </div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <div className="buttons">
                  <button onClick={() => handleEdit(index)} className="btn btn-outline-primary">Edit</button>
                  <button onClick={() => handleDelete(index)} className="btn btn-outline-danger">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h4>&copy; 2023 Luvkush Sharma. All Rights Reserved.</h4>
    </>
  );
}
