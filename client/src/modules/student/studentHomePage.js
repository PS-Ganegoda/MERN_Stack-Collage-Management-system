import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import StudentNavbar from "../../components/studentNavbar";

function StudentHomePage(){
    return(
        <div>
            <StudentNavbar/>
            <div className="viewhome">
                <h1>View Courses</h1>
                <Link to="/course/view"><button>View</button></Link>
            </div>
            <div className="viewhome">
                <h1>View Announcements</h1>
                <Link to="/announcement/view"><button>view</button></Link>
            </div>
        </div>
        
    )
}

export default StudentHomePage;