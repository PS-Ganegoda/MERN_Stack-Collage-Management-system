import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function CreateCourse(){

    const [courseId, setCourseid] = useState();
    const [coursename, setCoursename] = useState();
    const [fee, setCoursefee] = useState();
    const [day, setCourseday] = useState();
    const [duration, setCourseDuration] = useState();

    const navigate = useNavigate();

    function submit(e){
        e.preventDefault();
        axios.post("http://localhost:8080/course", {courseId, coursename, fee, day, duration})
        .then(result => {
            console.log(result)
            navigate('/course')
        })
        .catch(err=>console.log(err));
    }

    return(
        <div>
            <form  onSubmit={submit}>
                <h2>Add Course</h2>
                <div>
                    <label>Course ID:</label>
                    <input type="text" placeholder="Enter Course ID"
                        onChange={(e) => setCourseid(e.target.value)}
                    />
                </div>
                <div>
                    <label>Course Name:</label>
                    <input type="text" placeholder="Enter Course Name"
                        onChange={(e) => setCoursename(e.target.value)}
                    />
                </div>
                <div>
                    <label>Course Fee:</label>
                    <input type="text" placeholder="Enter Course Fee"
                        onChange={(e) => setCoursefee(e.target.value)}
                    />
                </div>
                <div>
                    <label>Course Day:</label>
                    <input type="text" placeholder="Enter Course Day"
                        onChange={(e) => setCourseday(e.target.value)}
                    />
                </div>
                <div>
                    <label>Course Duration:</label>
                    <input type="text" placeholder="Enter Course Duration"
                        onChange={(e) => setCourseDuration(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )


}

export default CreateCourse;