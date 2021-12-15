import { useState } from 'react'  
import Header from "./components/Header";
import Tasks from "./components/Tasks";
const App = () => {

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
// Delete Task
 const deleteTask = (id) => {
  // console.log('delete', id)
  setTasks(tasks.filter((task) => task.id !== id))
 }

  return (
    <div className="container ">
      <Header  />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  ); 
}

export default App;
