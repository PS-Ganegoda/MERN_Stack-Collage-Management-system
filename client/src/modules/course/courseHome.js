import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import InstructorNavbar from "../../components/instructorNavbar";

function CourseHome(){

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/course') 
        .then(result=>setCourses(result.data))
        .catch(err=>console.log(err))
    },[]);

    function handleDelete(id){
        axios.delete('http://localhost:8080/course/'+id)
        .then(res=>{console.log(res)
        window.location.reload()})
        .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Courses</h1>
            <InstructorNavbar/>
            <Link to="/course/create"><button>Add course</button></Link>
            <table>
            <thead>
                <tr>
                    <th>Course ID</th>
                    <th>Course Name</th>
                    <th>Course Fee</th>
                    <th>Course Day </th>
                    <th>Course Duration</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    courses.map((course)=>{
                        return(
                        <tr>
                            <td>{course.courseId}</td>
                            <td>{course.coursename}</td>
                            <td>{course.fee}</td>
                            <td>{course.day}</td>
                            <td>{course.duration}</td>
                            <td>
                                <Link to={`/course/update/${course._id}`}><button>update</button></Link>
                                <button onClick={(e) => handleDelete(course._id)}>Delete</button>
                            </td>
                        </tr>
                        );
                    })
                }
            </tbody>
            </table>
        </div>
    )
}

export default CourseHome;
