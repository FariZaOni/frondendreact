//import Register from './Register';
import Login from './Login';
import Header from './Header';
import IntUserSearch from './IntUserSearch';
import UserPreview from './UserPreview';
import LeftSideBar from './LeftSideBar';
import {Route, Routes, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
function App() {
    
  return (
    <main className="App">
      <Header />
      <div className='body'>
          <LeftSideBar/>
          <Routes>
            <Route path='/' element={<UserPreview/>}></Route>
            
          </Routes>
      </div>
    </main>
  );
}

export default App;