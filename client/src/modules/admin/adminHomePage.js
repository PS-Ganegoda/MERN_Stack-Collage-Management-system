import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import AdminNavbar from "../../components/adminNavbar";

function AdminHomePage(){
    return(
        <div>
            <AdminNavbar/>
            <div className="viewhome">
                <h1>Manage Stduents</h1>
                <Link to="/student"><button>Manage</button></Link>
            </div>
            <div className="viewhome">
                <h1>Manage Instructors</h1>
                <Link to="/instructor"><button>Manage</button></Link>
            </div>
            <div className="viewhome">
                <h1>Manage payment Status</h1>
                <Link to="/paymentStatus"><button>Manage</button></Link>
            </div>
        </div>
    )

}

export default AdminHomePage;