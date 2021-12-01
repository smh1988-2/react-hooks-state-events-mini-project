import React from "react";
import Task from "./Task";

function TaskList({ currentCategory, setCategory, tasks, handleDelete }) {
  return (
    <div className="tasks">

      { currentCategory === "All" ? 
          tasks.map((task) => {
            return <Task 
              task={task} 
              key={task.text} 
              id={task.text} 
              handleDelete={handleDelete} />})
        : 
          tasks.filter((task) => task.category === currentCategory)
               .map((task) => {
                  return <Task 
                    task={task} 
                    key={task.text} 
                    id={task.text} 
                    handleDelete={handleDelete} />})}
    </div>
  );
}

export default TaskList;
