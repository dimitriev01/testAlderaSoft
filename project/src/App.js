import React from 'react';
import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import PageQuote from './Pages/PageQuote';
import PageTasks from './Pages/PageTasks';
import Navbar from './components/UI/Navbar/Navbar';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>

        <Routes>
          <Route path='/' element={<PageQuote/>} />
          <Route path='/tasks' element={<PageTasks />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
