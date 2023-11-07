import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import AdminNavbar from "../../components/adminNavbar";

function PaymentStatusHome(){

    const [paymentStatuses, setPaymentStatus] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/paymentStatus') 
        .then(result=>setPaymentStatus(result.data))
        .catch(err=>console.log(err))
    },[]);

    function handleDelete(id){
        axios.delete('http://localhost:8080/paymentStatus/'+id)
        .then(res=>{console.log(res)
        window.location.reload()})
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Payment Status</h1>
            <AdminNavbar/>
            <Link to="/paymentStatus/create"><button>Add Payment</button></Link>
            <table>
            <thead>
                <tr>
                    <th>Student NIC</th>
                    <th>Student Name</th>
                    <th>Payment Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    paymentStatuses.map((paymentStatus)=>{
                        return(
                        <tr>
                            <td>{paymentStatus.stuNIC}</td>
                            <td>{paymentStatus.stuName}</td>
                            <td>{paymentStatus.paymentStatus}</td>
                            <td>
                                <Link to={`/paymentStatus/update/${paymentStatus._id}`}><button>Update</button></Link>
                                <button onClick={(e) => handleDelete(paymentStatus._id)}>Delete</button>
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

export default PaymentStatusHome;