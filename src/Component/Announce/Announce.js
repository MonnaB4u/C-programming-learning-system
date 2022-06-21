import React from 'react';

const Announce = () => {

    let handleBtnClick = () => {
        let modal = document.getElementById("myModal");
        modal.style.display = 'block';
    }

    let handleSpan = () => {
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    return (
        <div>
            {/* <button onClick={() => handleBtnClick()} class="w3-button w3-black">Open Modal</button> */}
            <div className="">
                <div id="myModal" className="modal w-75 mx-5 px-5" >
                    <div class=" my-5 bb">
                        <span onClick={() => handleSpan()} className="m-2 text-danger tf close">&times;</span>

                        <div className="row">
                            <div className="col-md-3">

                            </div>
                            <div className="col-md-9">
                                <div className="mx-5">
                                    <h4 className="h4 mt-2 text-success">Thank You First Community for Helping Team Cymru Reach a new Csirt Assistance Program Milestone</h4>
                                    <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quam. Eveniet, voluptas. Vero porro aliquam enim perspiciatis delectus illum accusamus nobis atque cupiditate, tenetur ducimus odio maxime quia doloribus eaque?</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Announce;
