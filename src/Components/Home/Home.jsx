import { Gantt } from "gantt-task-react"; // Import Gantt component
import "gantt-task-react/dist/index.css"; // Import default styles
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './Home.scss';

// Define the tasks without TypeScript type annotation
const tasks = [
  {
    start: new Date(2024, 9, 1),
    end: new Date(2024, 9, 5),
    name: "Task 1",
    id: "1",
    type: "task",
    progress: 50,
    dependencies: [],
  },
  {
    start: new Date(2024, 9, 6),
    end: new Date(2024, 9, 9),
    name: "Task 2",
    id: "2",
    type: "task",
    progress: 20,
    dependencies: ["1"],
  }
];

// Using concise arrow function for TaskCard
const TaskCard = ({ task }) => (
  <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
    <h4>{task.name}</h4>
    <p>Start: {task.start.getHours()}:{task.start.getMinutes()}</p>
    <p>End: {task.end.getHours()}:{task.end.getMinutes()}</p>
  </div>
);

// You can define Home as a function declaration or keep it as an arrow function
const Home = () => (
  <div className="home">
    <div className="home_sidebar">
      <Sidebar />
    </div>

    <div className="home_main">
      <Navbar />
      <h1>HEY</h1>
      <div className="bg_color" />

      {/* Integrate Gantt chart here */}
      <Gantt
        tasks={tasks}
        viewMode="Hour"  // Adjust view mode as needed
        renderTask={(task) => <TaskCard task={task} />}  // Use custom task card
        columnWidth={80}  // Set appropriate column width
      />
    </div>
  </div>
);

export default Home;
