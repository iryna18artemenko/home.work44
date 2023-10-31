import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <div className="App">
      <h1>To-do List</h1>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

// function App() {

//   const[tasks, setTasks] = useState([
//     {id: 1, title: "Learn React 1", complited: false},
//     {id: 2, title: "Learn React 2", complited: false},
//     {id: 3, title: "Learn React 3", complited: false},
//   ]);

//   const [input, setInput] = useState('');

//   function todoComplited (id) {
//       setTasks(tasks.filter (task => {
//         if (task.id === id) {
//           task.complited = !task.complited
//         }
//         return task;
//       }));
//   };

//   function removeTask (id) {
//     setTasks(tasks.filter (task => task.id !== id))
//   };

//   function addTask (e) {
//     if (e.code === "Enter" && input.trim() !== '' ) {
//       setTasks(tasks.concat([{id: Math.random(), title: input}]));
//       setInput('');
//     }
//   };

//   function addTaskBtn () {
//     if (input) {
//       setTasks(tasks.concat([{id: Math.random(), title: input}]));
//       setInput('');
//     }

//   }

//   return (
//     <div className="App">
//       <h1 className='header'>Todo List</h1>

//       {tasks && tasks.map(task => {
//          return (
//           <div className='taskWrapper' key={task.id}>
//               <input type='checkbox' onClick={() => todoComplited(task.id)}/>
//               <div className='taskTitle' style={{textDecoration: task.complited ? "line-through" : null }} >{task.title}</div>
//               <div onClick={() => removeTask(task.id)}>&times;</div>
//          </div>)
//       })}

//       <div className='addTask'>
//         <input value={input} type='text' onKeyUpCapture={(e) => addTask(e)} onChange={(e) => setInput(e.target.value)}/>
//         <button className='btn' onClick={() => addTaskBtn()} >Add</button>
//       </div>

//     </div>
//   );
// }

export default App;
