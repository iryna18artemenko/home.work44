import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";

const mapStateProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodoBtn = () => {
    props.addTodo({
      id: Math.floor(Math.random() * 1000),
      item: todo,
      completed: false,
    });
    setTodo("");
  };

  return (
    <form className="addTodos">
      <input
        type="text"
        value={todo}
        required
        pattern="\S+ \S+"
        name="new_todo"
        onChange={(e) => handleChange(e)}
        className="todo-input"
      />
      <button className="add-btn" onClick={() => addTodoBtn()}>
        Add
      </button>
    </form>
  );
};

export default connect(mapStateProps, mapDispatchToProps)(Todos);
