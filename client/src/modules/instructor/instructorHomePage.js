import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import InstructorNavbar from "../../components/instructorNavbar";

function InstructorHomePage(){
    return(
        <div>
            <InstructorNavbar/>
            <div className="viewhome">
                <h1>Manage Courses</h1>
                <Link to="/course"><button>Manage</button></Link>
            </div>
            <div className="viewhome">
                <h1>Manage Announcements</h1>
                <Link to="/announcement"><button>Manage</button></Link>
            </div>
        </div>
        
    )
}

export default InstructorHomePage;