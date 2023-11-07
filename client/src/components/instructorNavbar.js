import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom"
import Navbar from "./Navbar";

function InstructorNavbar(){

    // const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
		window.location.reload();
        window.location = "/instructor/login";
        // setCookies("access_token", "");
        // window.localStorage.clear();        
        //navigate("/instructor/login");
    }

    return (
        <div>
            <Navbar/>
            <Link to="/instructor/homepage"><button>Instructor Home</button></Link>
            <Link to="/course"><button>Manage Courses</button></Link>
            <Link to="/announcement"><button>Manage Announcements</button></Link>
            {/* {!cookies.access_token ? (<Link to="/student/login">Login/Register</Link>) :(<button onClick={logout}>Logout</button>)} */}
            <button onClick={logout}>Logout</button>

        </div>
    )

}

export default InstructorNavbar;