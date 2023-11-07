import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom"
import Navbar from "./Navbar";

function AdminNavbar(){

    // const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
		window.location.reload();
        window.location = "/admin/login";
        // setCookies("access_token", "");
        // window.localStorage.clear();        
        //navigate("/student/login");
    }

    return (
        <div>
            <Navbar/>
            <Link to="/admin/homepage"><button>Admin Home</button></Link>
            <Link to="/student"><button>Manage Students</button></Link>
            <Link to="/instructor"><button>Manage Instructors</button></Link>
            <Link to="/paymentStatus"><button>Managee Payment Status</button></Link>
            {/* {!cookies.access_token ? (<Link to="/student/login">Login/Register</Link>) :(<button onClick={logout}>Logout</button>)} */}
            <button onClick={logout}>Logout</button>

        </div>
    )

}

export default AdminNavbar;