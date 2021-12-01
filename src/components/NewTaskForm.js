import React from "react";

function NewTaskForm({ onTaskFormSubmit , categories, newTaskDetail, setNewTaskDetail, newTaskCategory, setNewTaskCategory }) {
  
  const myOptions = categories.filter(category => category !== "All")
  .map(category => {
    return (<option>{category}</option>)
  })

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" 
        name="text" 
        onChange={e => setNewTaskDetail(e.target.value)}
        value={newTaskDetail}/>
      </label>
      <label>
        Category
        <select 
        name="category" 
        onChange={e => setNewTaskCategory(e.target.value)}
        value={newTaskCategory}>
          {myOptions}
        </select>
      </label>
      <input 
        type="submit" 
        value="Add task" 
        onClick={e => onTaskFormSubmit(e)}/>
    </form>
  );
}

export default NewTaskForm;
