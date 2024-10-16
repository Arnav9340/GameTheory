import React from 'react';
import Navbar from '../Navbar/Navbar';
import ScheduleCalendar from '../Scheduler/Scheduler';
import Sidebar from '../Sidebar/Sidebar';
import './Home.scss';


// You can define Home as a function declaration or keep it as an arrow function
const Home = () => (
  <div className="home">
    <div className="home_sidebar">
      <Sidebar />
    </div>

    <div className="home_main">
      <Navbar />
     
      

      <ScheduleCalendar />
    </div>
  </div>
);

export default Home;
