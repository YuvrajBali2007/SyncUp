import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("LoggedIn");
        navigate("/");
    }

    return (
        <nav className = "navbar navbar-expand-lg navbar bg-dark shadow ">
            <div className = "container" > 
                <Link className = "navbar-brand fw-bold text-white " to = "/">
                Meeting Manager
                </Link>
                <div className ="navbar-nav ms-auto">
                    <Link className = "nav-link text-white " to = "/Home">
                    HOME</Link>

                    <Link className = "nav-link text-white" to = "/create-meeting" >
                    Schedule Meeting</Link>

                    <Link className="nav-link text-white" to="/meetings">
                    Meetings
                   </Link>
                   <button className ="btn btn-secondary"
                   onClick={handleLogout} >
                    Logout
                   </button>

                </div>
            </div>
        </nav>
      
    )
}
export default Navbar;

