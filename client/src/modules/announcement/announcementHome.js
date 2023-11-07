import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import InstructorNavbar from "../../components/instructorNavbar";

function AnnouncementHome(){

    const [announcements, setAnnouncement] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/announcement') 
        .then(result=>setAnnouncement(result.data))
        .catch(err=>console.log(err))
    },[]);

    function handleDelete(id){
        axios.delete('http://localhost:8080/announcement/'+id)
        .then(res=>{console.log(res)
        window.location.reload()})
        .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Announcement</h1>
            <InstructorNavbar/>
            <Link to="/announcement/create"><button>Add Announcement</button></Link>
            <table>
            <thead>
                <tr>
                    <th>Course ID</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Action</th>
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
                            <td>
                                <Link to={`/announcement/update/${announcement._id}`}><button>update</button></Link>
                                <button onClick={(e) => handleDelete(announcement._id)}>Delete</button>
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

export default AnnouncementHome;