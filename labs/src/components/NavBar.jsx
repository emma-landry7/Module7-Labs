import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const {currentUser, handleUpdateUser} = useUserContext()
    const navigate = useNavigate()
    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/bitcoin">Bitcoin Rates</NavLink>
            {/* <NavLink to="/">Log Out</NavLink> */}
            <button className="link" onClick={() => {
                handleUpdateUser({})
                navigate("/")
                }}>Log Out</button>
        </nav>
    )
}