import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

import axios from "axios";

function UpdatePaymentStatus(){

    const navigate = useNavigate();

    const {id} = useParams();

    const [stuNIC, setStuNIC] = useState();
    const [stuName, setStuName] = useState();
    const [paymentStatus, setPaymentStatus] = useState();

    useEffect(()=>{
        axios.get('http://localhost:8080/paymentStatus/getPayment/'+id) 
        .then(result=>{console.log(result)
            setStuNIC(result.data.stuNIC);
            setStuName(result.data.stuName);
            setPaymentStatus(result.data.paymentStatus);
        })
        .catch(err=>console.log(err))
    },[]);

    function update(e){
        e.preventDefault();
        axios.put("http://localhost:8080/paymentStatus/"+id, {stuNIC, stuName, paymentStatus})
        .then(result => {
            console.log(result)
            navigate('/paymentStatus')
        })
        .catch(err=>console.log(err));
    }

    return(
        <div>
            <form  onSubmit={update}>
                <h2>Update Payment Status</h2>
                <div>
                    <label>Student NIC:</label>
                    <input type="text" placeholder="Enter Student NIC"
                        value={stuNIC} onChange={(e) => setStuNIC(e.target.value)}
                    />
                </div>
                <div>
                    <label>Student Name:</label>
                    <input type="text" placeholder="Enter Student Name"
                        value={stuName} onChange={(e) => setStuName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Payment Status:</label>
                    <input type="text" placeholder="Enter Payment Status"
                        value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}
                    />
                </div>
        
                <button>Submit</button>
            </form>
        </div>
    )

}

export default UpdatePaymentStatus;

