import { useState } from 'react';
import Task from './components/Task';
import AddTaskForm from './components/AddTaskForm';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);
  const addTask = (task) =>{
    
    const newTask = {
      id : tasks.length + 1,
      text: task.trim(),
      completed : false
    }
    setTasks(prevValue => [
      ...prevValue,
      newTask
    ])
    
  }
  const isClickedTask = (title) => {
    const findTask = tasks.find(task => task.text === title)
    findTask.completed = !findTask.completed  
  }

  const deleteTask = (title) => {
    const filterList = tasks.filter(task => task.text !== title )
    setTasks(filterList);
    
  }

  return (
    <>
      <AddTaskForm addTaskFunction={addTask} />
      <ul>
        {tasks.map(task => 
          <Task 
            key={task.text} 
            taskTitle={task.text} 
            taskCompleted={task.completed} 
            isClicked={isClickedTask} 
            deleteTaskFunction = {deleteTask}
          />
        )}
      </ul>
    </>
  );
};

export default App;
