import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import AdminNavbar from "../../components/adminNavbar";

function StudentHome(){

    const [stdents, setStudents] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/student') 
        .then(result=>setStudents(result.data))
        .catch(err=>console.log(err))
    },[]);

    function handleDelete(id){
        axios.delete('http://localhost:8080/student/'+id)
        .then(res=>{console.log(res)
        window.location.reload()})
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Student</h1>
            <AdminNavbar/>
            <Link to="/student/create"><button>Add Student</button></Link>
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
                    stdents.map((student)=>{
                        return(
                        <tr>
                            <td>{student.NIC}</td>
                            <td>{student.name}</td>
                            <td>{student.adress}</td>
                            <td>{student.Tele_no}</td>
                            <td>{student.birthDay}</td>
                            <td>{student.email}</td>
                            <td>
                                <Link to={`/student/update/${student._id}`}><button>update</button></Link>
                                <button onClick={(e) => handleDelete(student._id)}>Delete</button>
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

export default StudentHome;