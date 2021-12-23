import { useState } from 'react'  
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
const App = () => {
  const [showAddTask, SetShowAddTask] = useState(false)
  const[tasks, setTasks] = useState([
    {
        id: 1,  
        text: 'Morning Meditation',
        day: 'December 14th at 8:30am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Gym',
        day: 'December 14th at 9:30am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Daily Standup meeting',
        day: 'December 14th at 11:30am',
        reminder: true,
    },
    {
        id: 4,
        text: 'Check Fantasy Football Team',
        day: 'December 14th at 4:30pm',
        reminder: true,
    },
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000 ) + 1
  const newTask = { id, ...task }  
  setTasks([...tasks, newTask])
}

// Delete Task
 const deleteTask = (id) => {
  // console.log('delete', id)
  setTasks(tasks.filter((task) => task.id !== id))
 }

 // Toggle Reminder
 const toggleReminder = (id) => {
   setTasks
   (tasks.map((task) => task.id === id ? {...task, reminder:
     !task.reminder} : task 
     )
    )
 }

  return ( 
    <div className="container ">
      <Header onAdd={() => SetShowAddTask(!showAddTask)} showAdd = {showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}  />) : ( 'No Tasks to show')}
    </div> 
  ); 
}

export default App;
