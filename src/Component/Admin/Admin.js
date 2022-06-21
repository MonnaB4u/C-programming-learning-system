import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import './admin.css'
import AdminNav from './AdminNav';
const Admin = () => {
     const [loggedInusers, setLoggedInUsers] = useContext(UserContext);
    return (
        <div className="">
            <AdminNav></AdminNav>
            <div className="adminstyle">
                <h1>Hello : {loggedInusers.name}</h1>
                <h4>Wellcome to the admin panel</h4>

            </div>
        </div>

    );
};

export default Admin;
