import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function CreatePaymentStatus(){

    const [stuNIC, setStuNIC] = useState();
    const [stuName, setStuName] = useState();
    const [paymentStatus, setPaymentStatus] = useState();

    const navigate = useNavigate();

    function submit(e){
        e.preventDefault();
        axios.post("http://localhost:8080/paymentStatus", {stuNIC, stuName, paymentStatus})
        .then(result => {
            console.log(result)
            navigate('/paymentStatus')
        })
        .catch(err=>console.log(err));
    }

    return(
        <div>
            <form  onSubmit={submit}>
                <h2>Add Payment Status</h2>
                <div>
                    <label>Student NIC:</label>
                    <input type="text" placeholder="Enter Student NIC"
                        onChange={(e) => setStuNIC(e.target.value)}
                    />
                </div>
                <div>
                    <label>Student Name:</label>
                    <input type="text" placeholder="Enter Student Name"
                        onChange={(e) => setStuName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Payment Status:</label>
                    <input type="text" placeholder="Enter Payment Status"
                        onChange={(e) => setPaymentStatus(e.target.value)}
                    />
                </div>
        
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreatePaymentStatus;