import React, { useState } from 'react';

import './playlist.css'

const Playlist = (props) => {
    const { name, video } = props.videoDetails

    return (
        <div className="container-fluid ">
            <div className="">
                <div className="border dash">
                    <div className=" d-flex justify-content-center mt-5">
                        {
                            !video ?
                                <iframe id="ViostreamIframe" width="760" height="315" frameborder="0"
                                    allowfullscreen="" autoplay  src={`https://www.youtube.com/embed/cpP-fCo8Dn4`}>
                                </iframe>

                                :
                                <iframe id="ViostreamIframe" width="760" height="315" frameborder="0"
                                    allowfullscreen="" src={`https://www.youtube.com/embed/${video}`}>
                                </iframe>
                        }
                    </div>
                    <div className=" m-3 text-center">
                        {
                            !video ?
                                <h4>WellCome to the C programmign learning platform. we will start from the basic and we will end after become pro in c programming . let's get started. </h4> :
                                <h4>{name}</h4>
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Playlist;
