import React from "react";
import { useRef } from "react";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      e.preventDefault();
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li key={item.id} className="card">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button style={{ color: "blue" }} onClick={() => changeFocus()}>
          Edit
        </button>
        <button
          style={{ color: "green" }}
          onClick={() => completeTodo(item.id)}
        >
          Complete
        </button>
        <button style={{ color: "red" }} onClick={() => removeTodo(item.id)}>
          Delete
        </button>
      </div>
      {item.completed === true && <p className="completed">done</p>}
    </li>
  );
};

export default TodoItem;
