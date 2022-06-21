import React from 'react';
import { useForm } from 'react-hook-form';
import AdminNav from '../AdminNav';

const Announcement = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('https://boiling-sands-07825.herokuapp.com/addAnnouncemenr', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert("Announcement Added successfully");
                }
            }
            )
    }

    return (
        <div>
<div>
            <AdminNav></AdminNav>
            <div className="mt-5 pt-5 w-50  container">
                <div className="assbg bg-gray pt-5 mt-5 rounded">

                    <div className="mx-4 px-4 ">
                        <h4 className="">Upload new announcement</h4>
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                           <textarea {...register("announcement")} className="form-control my-3"  cols="30" rows="10"></textarea>
                            <input type="submit" className="mb-4 btn btn-primary" />
                            <small>{errors}</small>
                        </form>
                    </div>
                </div>


            </div>

        </div>
        </div>
    );
};

export default Announcement;
