import React, { useContext } from 'react';
import { UserContext } from '../../App';

const AdminNav = () => {
    const [loggedInusers, setLoggedInUsers] = useContext(UserContext);
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light navbg text-white">
                    <div class="container-fluid">
                        <a class="navbar-brand mx-5" href="#"> <span className="text-danger h1">C</span> <span className="text-white">Programming</span> </a>
                        <button class="navbar-toggler mx-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav ml-auto mx-5" >
                                <ul class="navbar-nav   mx-5">

                                    <li class=" nav-item active mx-4 h6">
                                        <a class="nav-link text-white" href="/">Home <span class="sr-only"></span></a>
                                    </li>

                                    <li class="nav-item mx-4 h6">
                                        <a class="nav-link text-white" href="/AddVideo">AddVideo</a>
                                    </li>

                                    <li class="nav-item mx-4 h6">
                                        <a class="nav-link text-white" href="/messageBox">Orders</a>
                                    </li>

                                    <li class="nav-item mx-4 h6">
                                        <a class="nav-link text-white " href="/announcement"> uploadAnnouncement</a>
                                    </li>
                                    <li class="nav-item mx-4 h6">
                                        <a class="nav-link text-white " href="/assignment"> UploadAssignment</a>
                                    </li>
                                    <li class="nav-item mx-4 h6 border">
                                        <a class="nav-link text-white " href="/login"> {!loggedInusers.name ? "Login" : loggedInusers.name}  </a>
                                    </li>


                                </ul>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default AdminNav;
