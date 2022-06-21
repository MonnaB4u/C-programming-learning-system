import React, { useEffect, useState } from 'react';
import CourserName from '../CourserName/CourserName';
import Playlist from '../Playlist.js/Playlist';
// import data from '../../Data/python'
import './plan.css'
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
const CoursePlan = () => {

    const [video, setVideo] = useState([])
    const [videoDetails, setVideoDetails] = useState(video)
    const [count, setCount] = useState(2)

    const navigate = useNavigate()

    useEffect(() => {
        const url = `https://boiling-sands-07825.herokuapp.com/VideosCollection`
        fetch(url)
            .then(res => res.json())
            .then(data => setVideo(data))
    }, [])

// {/* Progress Bar */}
    const viewDetailsHandler = (details) => {
        setVideoDetails(details)
        setCount(video.lenght + 1 ? count - 8 : count + video.length)
    }

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="progress mx-5 m-3">

                {/* Progress Bar */}

                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                    aria-valuemin="0" aria-valuemax="100" style={{ width: `${count}%` }}>
                    <p className="m-3 p-3 ">{count > 100 ? "you have finished all , wait for the next video" : count}%</p>
                </div>

                {/* Progress Bar */}
            </div>

            <div className="mx-3">
                <div className="row">
                    <div className="col-md-4 dash" style={{ minHeight: '90vh', minWidth: '220px' }}>
                        <div className="d-flex flex-column m-3" style={{}}>
                            {
                                video.map(video => <CourserName viewDetailsHandler={viewDetailsHandler} video={video} key={video.name}></CourserName>)
                            }
                        </div>

                    </div>

                    <div className="col-md-8">

                        <Playlist videoDetails={videoDetails}></Playlist>
                    </div>

                </div>

            </div>


        </div>

    );
};

export default CoursePlan;
