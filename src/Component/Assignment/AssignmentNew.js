import FileDownload from 'js-file-download';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const AssignmentNew = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const url = `https://boiling-sands-07825.herokuapp.com/AssignmentCollection`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="">
                    {
                        data.map((each, i) =>
                            <div class="card my-3">
                                <div class="card-header">
                                    Assignment <span className="h5">{i + 1}</span>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{each.assignment}</h5>
                                    <p class="card-text">{each.date}</p>
                                    <h6>Submission day: {each.expireDate}</h6>
                                    <a href="#" onClick={() => FileDownload(each.assignment, "downloaded.txt")} class="btn btn-primary">Download</a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AssignmentNew;
