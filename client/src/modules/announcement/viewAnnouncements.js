import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentNavbar from "../../components/studentNavbar";

function ViewAnnouncements(){

    const [announcements, setAnnouncement] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/announcement') 
        .then(result=>setAnnouncement(result.data))
        .catch(err=>console.log(err))
    },[]);

    return(
        <div>
            <h1>Announcement</h1>
            <StudentNavbar/>
            <table>
            <thead>
                <tr>
                    <th>Course ID</th>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    announcements.map((announcement)=>{
                        return(
                        <tr>
                            <td>{announcement.courseId}</td>
                            <td>{announcement.date}</td>
                            <td>{announcement.description}</td>
                        </tr>
                        );
                    })
                }
            </tbody>
            </table>
        </div>
    )

}

export default ViewAnnouncements;