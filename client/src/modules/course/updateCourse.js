import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

import axios from "axios";

function UpdateCourse(){

    const navigate = useNavigate();

    const {id} = useParams();

    const [courseId, setCourseid] = useState();
    const [coursename, setCoursename] = useState();
    const [fee, setCoursefee] = useState();
    const [day, setCourseday] = useState();
    const [duration, setCourseDuration] = useState();

    useEffect(()=>{
        axios.get('http://localhost:8080/course/getCourse/'+id) 
        .then(result=>{console.log(result)
            setCourseid(result.data.courseId);
            setCoursename(result.data.coursename);
            setCoursefee(result.data.fee);
            setCourseday(result.data.day);
            setCourseDuration(result.data.duration);
        })
        .catch(err=>console.log(err))
    },[]);

    function update(e){
        e.preventDefault();
        axios.put("http://localhost:8080/course/"+id, {courseId, coursename, fee, day, duration})
        .then(result => {
            console.log(result)
            navigate('/course')
        })
        .catch(err=>console.log(err));
    }

    return(
        <div>
        <form  onSubmit={update}>
            <h2>Update Course</h2>
            <div>
                <label>Course ID:</label>
                <input type="text" placeholder="Enter Course ID"
                    value={courseId} onChange={(e) => setCourseid(e.target.value)}
                />
            </div>
            <div>
                <label>Course Name:</label>
                <input type="text" placeholder="Enter Course Name"
                   value={coursename} onChange={(e) => setCoursename(e.target.value)}
                />
            </div>
            <div>
                <label>Course Fee:</label>
                <input type="text" placeholder="Enter Course Fee"
                    value={fee} onChange={(e) => setCoursefee(e.target.value)}
                />
            </div>
            <div>
                <label>Course Day:</label>
                <input type="text" placeholder="Enter Course Day"
                    value={day} onChange={(e) => setCourseday(e.target.value)}
                />
            </div>
            <div>
                <label>Course Duration:</label>
                <input type="text" placeholder="Enter Course Duration"
                    value={duration} onChange={(e) => setCourseDuration(e.target.value)}
                />
            </div>
            <button>Submit</button>
        </form>
    </div>
    )

    
}

export default UpdateCourse;