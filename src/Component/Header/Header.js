import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import { VscDebugStart } from 'react-icons/vsc';
const Header = () => {
    const navigate=useNavigate()
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-6 mt-5">
                        <div className="card card-bg">
                            <div className="card-body">
                                <div className="row ">
                                    <div className="col-lg-5">
                                        <img src="https://i.ibb.co/QjPdnXN/hello-world-in-C-Language.png" className=" img-fluid imgstyle my-3"/>
                                    </div>
                                    <div className="col-lg-7  mt-4">
                                        <h5>C programming and algorithm</h5>
                                        <p className="h6">Powered by Youtube</p>
                                        <button onClick={()=>navigate('/insideCourse')} className="btnstyle"><h6 className="mx-4 my-2">Start Course </h6></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
