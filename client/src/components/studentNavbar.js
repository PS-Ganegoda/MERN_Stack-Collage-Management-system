import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom"
import Navbar from "./Navbar";

function StudentNavbar(){

    // const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
		window.location.reload();
        window.location = "/student/login";
        // setCookies("access_token", "");
        // window.localStorage.clear();        
        //navigate("/student/login");
    }

    return (
        <div>
            <Navbar/>
            <Link to="/student/homepage"><button>Student Home</button></Link>
            <Link to="/course/view"><button>View Courses</button></Link>
            <Link to="/announcement/view"><button>View Announcements</button></Link>
            {/* {!cookies.access_token ? (<Link to="/student/login">Login/Register</Link>) :(<button onClick={logout}>Logout</button>)} */}
            <button onClick={logout}>Logout</button>

        </div>
    )

}

export default StudentNavbar;