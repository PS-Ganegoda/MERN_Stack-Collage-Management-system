import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentNavbar from "../../components/studentNavbar";

function ViewCourses(){

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/course') 
        .then(result=>setCourses(result.data))
        .catch(err=>console.log(err))
    },[]);

    return(
        <div>
            <h1>Courses</h1>
            <StudentNavbar/>
            <table>
            <thead>
                <tr>
                    <th>Course ID</th>
                    <th>Course Name</th>
                    <th>Course Fee</th>
                    <th>Course Day </th>
                    <th>Course Duration</th>
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
                        </tr>
                        );
                    })
                }
            </tbody>
            </table>
        </div>
    )

}

export default ViewCourses;