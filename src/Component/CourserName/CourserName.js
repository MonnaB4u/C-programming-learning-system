import React from 'react';
import './CourseName.css'

const CourserName = (props) => {
    const { name} = props.video
    return (
        <div className="overflow-auto " >
            <h6 className="border m-2 navs text-white" onClick={() => props.viewDetailsHandler(props.video)} ><h6 className="m-2">{name}</h6></h6>
        </div >
    );
};

export default CourserName;
