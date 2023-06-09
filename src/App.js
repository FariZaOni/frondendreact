//import Register from './Register';
import Login from './Login';
import Header from './Header';
import IntUserSearch from './IntUserSearch';
import UserPreview from './UserPreview';
import LeftSideBar from './LeftSideBar';
import {Route, Routes, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
import Layout from './Layout';
function App() {
    const API_URL_USERPROFILE="http://localhost:3500/UserProfile";

    const [userProfile, setUserProfile]=useState({});

    useEffect(()=>{
      const fetchItems = async ()=>{
        try{
          const response = await fetch(API_URL_USERPROFILE);
          const listUserProfile = await response.json();
          setUserProfile(listUserProfile);
        }catch (err){}
      }
      (async () => await fetchItems())();
    },[])

  return (
    <main className="App">
      <Header />
      <div className='body'>
          
          <Routes>
            <Route path='/home' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="searchuser" element={<UserPreview users={userProfile}/>} />
              <Route path="inteligentsearch" element={<IntUserSearch/>} />
              
            </Route>

            <Route index element={<Login/>}>

            </Route>
            
          </Routes>
      </div>
    </main>
  );
}

export default App;