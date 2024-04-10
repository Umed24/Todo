import './App.css';
import React from 'react';
import Alltasks from './pages/Alltasks';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Incompletetasks from './pages/Incompletetasks';
import Importanttasks from './pages/Importanttasks';
import Completedtasks from './pages/Completedtasks';

function App() {
  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}>
            <Route index element={<Alltasks />} />
            <Route path='/ImportantTasks' element={<Importanttasks />} />
            <Route path='/Incompletetasks' element={<Incompletetasks />} />
            <Route path='/Completedtasks' element={<Completedtasks />} />

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
