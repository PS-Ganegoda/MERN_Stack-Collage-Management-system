import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function CreateAnnouncement(){

    const [courseId, setCourseid] = useState();
    const [date, setDate] = useState();
    const [description, setDescription] = useState();

    const navigate = useNavigate();

    function submit(e){
        e.preventDefault();
        axios.post("http://localhost:8080/announcement", {courseId, date, description})
        .then(result => {
            console.log(result)
            navigate('/announcement')
        })
        .catch(err=>console.log(err));
    }


    return(
        <div>
            <form  onSubmit={submit}>
                <h2>Add Announcement</h2>
                <div>
                    <label>Course ID:</label>
                    <input type="text" placeholder="Enter Course ID"
                        onChange={(e) => setCourseid(e.target.value)}
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="text" placeholder="Enter Date"
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" placeholder="Enter Description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )

}

export default CreateAnnouncement;