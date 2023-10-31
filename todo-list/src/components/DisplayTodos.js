import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItems";

const mapStateProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");

  const shouldItemBeShown = (statusValue, item) => {
    switch (statusValue) {
      case "active":
        return !item.completed;
      case "completed":
        return !!item.completed;
      default:
        return true;
    }
  };

  return (
    <div className="displaytodos">
      <div className="buttons">
        <button onClick={() => setSort("active")}>Active</button>
        <button onClick={() => setSort("completed")}>Completed</button>
        <button onClick={() => setSort("all")}>All</button>
      </div>
      <ul>
        {props.todos.length > 0
          ? props.todos.map((item) => {
              return (
                shouldItemBeShown(sort, item) && (
                  <>
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  </>
                )
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateProps, mapDispatchToProps)(DisplayTodos);
