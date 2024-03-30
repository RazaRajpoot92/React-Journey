import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Navbar = ()=>{

    const userStatus = useUserStatus()
    const {username} = useContext(UserContext)
   
    return(
        <>
        <div className="flex h-[10vh] p-4 items-center justify-around ">
            <div>
                <h1 className="text-3xl font-semibold">Storify</h1>
            </div>
            <ul className="flex text-lg gap-4">
                <li className="link">Status {userStatus?"🟢":"🔴"}</li>
                <li className=" hover:text-blue-600"><Link className="link" to={"/"} >Home</Link></li>
                <li className=" hover:text-blue-600"><Link className="link" to={"/contact"} >Contact</Link></li>
                <li className=" hover:text-blue-600"><Link className="link" to={"/about"} >About Us</Link></li>
                <li className=" hover:text-blue-600"><Link to={"/login"} className="nav-btn">{username===""?"Login":username}</Link></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;