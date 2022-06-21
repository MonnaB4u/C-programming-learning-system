import React, { useContext, useEffect, useState } from 'react';
import './Navabr.css'
import notiIco from '../../Data/download.png'
import { BiMessageAltDetail } from 'react-icons/bi';
import { UserContext } from '../../App';
import { MdOutlineAssignment } from 'react-icons/md';

const Navbar = () => {
  const [loggedInusers, setLoggedInUsers] = useContext(UserContext);
  const [conmessage, setConmessage] = useContext(UserContext);
  // console.log("nav",conmessage)

  let handleBtnClick = () => {
    let modal = document.getElementById("myModal");
    modal.style.display = 'block';
  }

  let handleSpan = () => {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  const [data, setData] = useState([])
  useEffect(() => {
    const url = `https://boiling-sands-07825.herokuapp.com/AnnounceCollection`
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  const [isOnline, set_isOnline] = useState(true);
    let interval = null;

    const InternetErrMessagenger = () => set_isOnline(navigator.onLine === true); // for do like this shortform


    useEffect(() => {
        interval = setInterval(InternetErrMessagenger, 6000); // call the function name only not with function with call `()`
        return () => {
            clearInterval(interval) // for component unmount stop the interval
        }
    }, [])
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light navbg text-white">
        <div class="container-fluid">
          <a class="navbar-brand mx-5" href="/"> <span className="text-danger h1">C</span> <span className="text-white">Programming</span> </a>
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
                  <a class="nav-link text-white" href="/admin">{loggedInusers.name && "Admin"}</a>
                </li>

                <li class="nav-item mx-4 h6">
                  <a class="nav-link text-white" href="/messageBox">{loggedInusers.name && ` MessageBox`}{loggedInusers.name && <BiMessageAltDetail />}</a>
                </li>

                <li class="nav-item mx-4 h6">
                  <a class="nav-link text-white " href="/urAssignment">{loggedInusers.name && "Assignment"}{loggedInusers.name && <MdOutlineAssignment />}</a>
                </li>

                <li class="nav-item mx-4 h6">
                  <a class="nav-link text-white " href="#" onClick={() => handleBtnClick()}> {loggedInusers.name && <img src={notiIco} alt="" />} </a>
                </li>

                <li class="nav-item mx-4 h6">
                  <a class="nav-link text-white " href="/login"> {!loggedInusers.name ? "Login" : loggedInusers.name}{isOnline &&  <span class="dot"></span> }  </a>
                </li>


              </ul>

            </div>
          </div>
        </div>
      </nav>

      {/* myModal Start */}
      <div className="">
        <div id="myModal" className="modal w-75 mx-5 px-5 mt-5 pt-5" >
          <div className=" d-flex justify-content-center mx-5">
            <div class=" my-5 bb bg-success ">
              <span onClick={() => handleSpan()} className="m-2 text-danger tf close h1">&times;</span>

              <div className="row ">
                <h4 className="h4 mt-2 text-success">Announcement</h4>
                {
                  data.map((each, i) =>
                    <div className="">
                      <div className="mx-5 mb-5">

                        <h6>{i + 1}:  {each.announcement}</h6>
                      </div>
                    </div>
                  )
                }


              </div>
            </div>
          </div>
        </div>
      </div>
      {/* myModal Finished */}
    </div>
  );
};

export default Navbar;
