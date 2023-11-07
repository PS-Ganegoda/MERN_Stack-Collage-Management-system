import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function CreateInstructor(){

    const [NIC, setNIC] = useState();
    const [name, setName] = useState();
    const [adress, setAddress] = useState();
    const [Tele_no, setTelNo] = useState();
    const [birthDay, setBirthDay] = useState();
    const [email, setEmail] = useState();

    const navigate = useNavigate();

    function submit(e){
        e.preventDefault();
        axios.post("http://localhost:8080/instructor", {NIC, name, adress, Tele_no, birthDay, email})
        .then(result => {
            console.log(result)
            navigate('/instructor')
        })
        .catch(err=>console.log(err));
    }

    return(
        <div>
            <form  onSubmit={submit}>
                <h2>Add Instructor</h2>
                <div>
                    <label>NIC:</label>
                    <input type="text" placeholder="Enter NIC"
                        onChange={(e) => setNIC(e.target.value)}
                    />
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" placeholder="Enter Address"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <label>Telephone Number:</label>
                    <input type="text" placeholder="Enter Telephone Number"
                        onChange={(e) => setTelNo(e.target.value)}
                    />
                </div>
                <div>
                    <label>Birthday:</label>
                    <input type="text" placeholder="Enter Birthday"
                        onChange={(e) => setBirthDay(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateInstructor;