import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

import axios from "axios";

function UpdateAnnouncement(){

    const navigate = useNavigate();

    const {id} = useParams();

    const [courseId, setCourseid] = useState();
    const [date, setDate] = useState();
    const [description, setDescription] = useState();

    useEffect(()=>{
        axios.get('http://localhost:8080/announcement/getAnnouncement/'+id) 
        .then(result=>{console.log(result)
            setCourseid(result.data.courseId);
            setDate(result.data.date);
            setDescription(result.data.description);
        })
        .catch(err=>console.log(err))
    },[]);

    function update(e){
        e.preventDefault();
        axios.put("http://localhost:8080/announcement/"+id, {courseId, date, description})
        .then(result => {
            console.log(result)
            navigate('/announcement')
        })
        .catch(err=>console.log(err));
    }



    return(
        <div>
            <form  onSubmit={update}>
                <h2>Update Announcement</h2>
                <div>
                    <label>Course ID:</label>
                    <input type="text" placeholder="Enter Course ID"
                        value={courseId} onChange={(e) => setCourseid(e.target.value)}
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="text" placeholder="Enter Date"
                        value={date} onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" placeholder="Enter Description"
                        value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateAnnouncement;