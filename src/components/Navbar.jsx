import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <>
        <div className="navcontainer">
            <div>
                <h1 className="logo">Storify</h1>
            </div>
            <ul className="nav-items">
                <li className="nav-item"><Link className="link" to={"/"} >Home</Link></li>
                <li className="nav-item"><Link className="link" to={"/contact"} >Contact</Link></li>
                <li className="nav-item"><Link className="link" to={"/about"} >About Us</Link></li>
                <li className="nav-item"><button className="nav-btn">Login</button></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;