import {Link} from "react-router-dom";
import Navbar from "./components/Navbar";


function Home(){
    return (
        /*<div>
            <div>
                <h1>Stduent</h1>
                <Link to="/student/login">Student Login / Register Page</Link>
            </div>
            <div>
                <h1>Instructor</h1>
                <Link to="/instructor/login">Instructor Login / Register Page</Link>
            </div>
            <div>
                <h1>Admin</h1>
                <Link to="/admin/login">Admin Login / Register Page</Link>
            </div>
            <div>
                <br/><br/><br/>
                <Link to="/">Back to FrontPage</Link>
            </div>
        </div>*/
        <div>
            <Navbar/>
            <div class="container">
            <section class="services">
                <div class="card">
                    <div class="content">
                        <div class="icon"><i class="fa fa-code"></i></div>
                        <div class="title">Student</div>
                        <Link to="/student/login"><button>Student Login / Register</button></Link>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="icon"><i class="fa fa-mobile"></i></div>
                        <div class="title">Instructor</div>
                        <Link to="/instructor/login"><button>Instructor Login / Register</button></Link>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="icon"><i class="fa fa-paint-brush"></i></div>
                        <div class="title">Admin</div>
                        <Link to="/admin/login"><button>Admin Login / Register</button></Link>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
}

export default Home;