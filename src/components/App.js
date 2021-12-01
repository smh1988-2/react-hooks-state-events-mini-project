import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [displayedTasks, setDisplayedTasks] = useState(TASKS);
  const [currentCategory, setCategory] = useState("All");
  const [newTaskDetail, setNewTaskDetail] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("Code");

  function handleDelete(id) {
    setDisplayedTasks(displayedTasks.filter((task) => task.text !== id));
  }

  function onTaskFormSubmit(e) {
    e.preventDefault();
    const newArray = [
      ...displayedTasks,
      { text: newTaskDetail , category: newTaskCategory },
    ];
    setDisplayedTasks(newArray);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        currentCategory={currentCategory}
        setCategory={setCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        newTaskDetail={newTaskDetail}
        setNewTaskDetail={setNewTaskDetail}
        newTaskCategory={newTaskCategory}
        setNewTaskCategory={setNewTaskCategory}
        tasks={displayedTasks}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={displayedTasks}
        key={TASKS.text}
        handleDelete={handleDelete}
        currentCategory={currentCategory}
        setCategory={setCategory}
      />
    </div>
  );
}

export default App;
