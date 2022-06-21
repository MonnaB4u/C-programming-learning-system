import React, { createContext, useEffect, useState } from 'react';
import Home from './Component/Home/Home';
import './App.css'
import Navbar from './Component/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CoursePlan from './Component/CoursePlan/CoursePlan';
import Login from './Login/Login';
import ChatBox from './Component/ChatBox/ChatBox';
import Admin from './Component/Admin/Admin';
import Assignment from './Component/Admin/Assignment/Assignment';
import AssignmentNew from './Component/Assignment/AssignmentNew';
import Addvideo from './Component/Admin/Addvideo/Addvideo';
import Announce from './Component/Announce/Announce';
import Announcement from './Component/Admin/Announcement/Announcement';
import PrivateRoute from './Login/PrivateRoute';
export const UserContext = createContext();
export const MessageContext = createContext();
const App = () => {

  const [loggedInUser, setLoggedInUsers] = useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  return (
    <div className="app">
      <UserContext.Provider value={[loggedInUser, setLoggedInUsers]}>

        <BrowserRouter>

          <Routes>
            <Route element={<PrivateRoute />}>
              < Route path='/' element={<Home></Home>} />


              <Route path='/insideCourse' element={<CoursePlan />} />
              <Route path='/messageBox' element={<ChatBox />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/assignment' element={<Assignment />} />
              <Route path='/urAssignment' element={<AssignmentNew />} />
              <Route path='/announcement' element={<Announcement />} />
              <Route path='/Addvideo' element={<Addvideo />} />
              <Route path='/announce' element={<Announce />} />
            </Route>
            <Route path='/login' element={<Login />} />
          </Routes>


        </BrowserRouter>

      </UserContext.Provider>
    </div>
  );
};

export default App;
