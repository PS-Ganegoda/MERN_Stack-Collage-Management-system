import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom"

function AdminLogin(){
    return(
        <div>
            <h1>Admin Registration / Login</h1>
            <Login/>
            <Register/>
            <div>
                <Link to="/home"><h3><button>Go to Home</button></h3></Link>
            </div>
        </div>
    )
}

function Login(){

    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");

    const navigate = useNavigate();

    const onSubmit = async(event)=>{
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/adminAuth/login", {
                username, 
                password
            });

            localStorage.setItem("token", response.data);
			window.location = "/admin/homepage";
            
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <Form 
            username={username} 
            setUsername={setUsername} 
            password={password} 
            setpassword={setpassword}
            label= "Login"
            onSubmit={onSubmit}
        />
    )
}

function Register(){

    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");

    const onSubmit = async (event) => {

        console.log("register called");
        console.log(username);
        
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/adminAuth/register", {username, password});
            alert("Registration Completed! Now login");
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <Form 
            username={username} 
            setUsername={setUsername}
            password={password} 
            setpassword={setpassword}
            label= "Register"
            onSubmit={onSubmit}
        />
    )
}

function Form({username, setUsername, password, setpassword , label, onSubmit}){
    return(
        <div>
            <form onSubmit={onSubmit}>
                <h2> {label} </h2>
                <div>
                    <label htmlFor="username"> Username:</label>
                    <input type="text" id="username" value={username} onChange={(event)=> setUsername(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password"> Password:</label>
                    <input type="password" id="password" value={password} onChange={(event)=>setpassword(event.target.value)}/>
                </div>

                <button type="submit"> {label} </button>

            </form>
        </div>
    )
}

export default AdminLogin;