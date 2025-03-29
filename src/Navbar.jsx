import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
        <img src="/src/assets/Group 36.png" alt="" />
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" className="brr" >New Blog</Link>
        </div>
        </nav>
     );
}
 
export default Navbar;