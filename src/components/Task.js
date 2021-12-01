import React from "react";

function Task({ task, handleDelete, id }) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={(e) => handleDelete(id)}>X</button>
    </div>
  );
}

export default Task;
