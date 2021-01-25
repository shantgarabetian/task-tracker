import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState, useEffect } from "react";


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [addTaskFlag, setaddTaskFlag] = useState(false);

  // using fetch to get the data from rest api
  useEffect(() => {
    const getTasks = async () => {
      const taskfromserver = await fetchTasks();
      setTasks(taskfromserver);
    };
    getTasks();
  }, []);
  // fetch Tasks
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    return data;
  };
  //Add Task
  const addTask = async (task) => {
    const response = await fetch(`http://localhost:5000/tasks/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    setTasks([...tasks, data]);
  };
  // delete task func
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((task) => task.id !== id));
  };
  //Toggle reminder

  const toggleReminder = async (id) => {
    let task = tasks.find((task) => task.id === id);
    const updatedTask = { ...task, reminder: !task.reminder };

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const data = await response.json();

    setTasks(tasks.map((task) => (task.id === id ? data : task)));
  };
  const toggleAddTask = () => {
    setaddTaskFlag(!addTaskFlag);
  };


  return (
    <Router>
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
