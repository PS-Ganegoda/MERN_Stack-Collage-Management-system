import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

import axios from "axios";


function UpdateStudent(){

    const navigate = useNavigate();

    const {id} = useParams();

    const [NIC, setNIC] = useState();
    const [name, setName] = useState();
    const [adress, setAddress] = useState();
    const [Tele_no, setTelNo] = useState();
    const [birthDay, setBirthDay] = useState();
    const [email, setEmail] = useState();

    useEffect(()=>{
        axios.get('http://localhost:8080/student/getStudent/'+id) 
        .then(result=>{console.log(result)
            setNIC(result.data.NIC);
            setName(result.data.name);
            setAddress(result.data.adress);
            setTelNo(result.data.Tele_no);
            setBirthDay(result.data.birthDay);
            setEmail(result.data.email);
        })
        .catch(err=>console.log(err))
    },[]);

    function update(e){
        e.preventDefault();
        axios.put("http://localhost:8080/student/"+id, {NIC, name, adress, Tele_no, birthDay, email})
        .then(result => {
            console.log(result)
            navigate('/student')
        })
        .catch(err=>console.log(err));
    }

    return(
        <div>
            <form  onSubmit={update}>
                <h2>Update Student</h2>
                <div>
                    <label>NIC:</label>
                    <input type="text" placeholder="Enter NIC"
                        value={NIC} onChange={(e) => setNIC(e.target.value)}
                    />
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter Name"
                        value={name}  onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" placeholder="Enter Address"
                        value={adress} onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <label>Telephone Number:</label>
                    <input type="text" placeholder="Enter Telephone Number"
                        value={Tele_no} onChange={(e) => setTelNo(e.target.value)}
                    />
                </div>
                <div>
                    <label>Birthday:</label>
                    <input type="text" placeholder="Enter Birthday"
                        value={birthDay} onChange={(e) => setBirthDay(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" placeholder="Enter Email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateStudent;