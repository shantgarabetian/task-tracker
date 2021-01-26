import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState } from "react";


const App = () => {
  const [tasks, setTasks] = useState(
    [
      {
        "id": 1,
        "text": "Doctor Appointment",
        "day": "Jan 7th at 1:00pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Office Appointment",
        "day": "Jan 8th at 2:00pm",
        "reminder": true
      },
      {
        "id": 3,
        "text": "Dinner Appointment",
        "day": "Jan 9th at 8:00pm",
        "reminder": false
      },
      {
        "id": 4,
        "text": "Lunch Appointment",
        "day": "Jan 10th at 2:00pm",
        "reminder": false
      }
    ]
  );
  const [addTaskFlag, setaddTaskFlag] = useState(false);
    const generateId = () => {
      //copy the ids of the array 
      const ids = tasks.map(task => task.id)
      // get the max id
      const maxId = Math.max(...ids)
      //add 1 to the max id generated
      const newId = maxId + 1
      //return the 
      return newId
    }

  //Add Task
  const addTask = (task) => {
    const taskWithId = {...task, id: generateId()}
    setTasks([...tasks, taskWithId]);
  };
  // delete task func
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //Toggle reminder

  const toggleReminder = (id) => {
    let task = tasks.find((task) => task.id === id);
    const updatedTask = { ...task, reminder: !task.reminder };

    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };
  const toggleAddTask = () => {
    setaddTaskFlag(!addTaskFlag);
  };


  return (
    <Router basename="/task-tracker">
      <div className='container'>
        <Header
          onClick={toggleAddTask}
          addTaskFlag={addTaskFlag}
        />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {addTaskFlag && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Tasks To Show'
              )}
            </>
          )}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
    
  )
}

export default App;
