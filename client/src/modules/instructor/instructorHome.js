import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import AdminNavbar from "../../components/adminNavbar";
function InstructorHome(){

    const [instructors, setInstructor] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/instructor') 
        .then(result=>setInstructor(result.data))
        .catch(err=>console.log(err))
    },[]);

    function handleDelete(id){
        axios.delete('http://localhost:8080/instructor/'+id)
        .then(res=>{console.log(res)
        window.location.reload()})
        .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Instructor</h1>
            <AdminNavbar/>
            <Link to="/instructor/create"><button>Add Instructor</button></Link>
            <table>
            <thead>
                <tr>
                    <th>NIC</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Telephone Number</th>
                    <th>Birthday</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    instructors.map((instructor)=>{
                        return(
                        <tr>
                            <td>{instructor.NIC}</td>
                            <td>{instructor.name}</td>
                            <td>{instructor.adress}</td>
                            <td>{instructor.Tele_no}</td>
                            <td>{instructor.birthDay}</td>
                            <td>{instructor.email}</td>
                            <td>
                                <Link to={`/instructor/update/${instructor._id}`}>update</Link>
                                <button onClick={(e) => handleDelete(instructor._id)}>Delete</button>
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

export default InstructorHome;