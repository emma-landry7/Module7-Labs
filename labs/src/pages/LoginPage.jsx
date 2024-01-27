import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";

export default function LoginPage() {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [submitMessage, setSubmitMessage] = useState('')
    const {currentUser, handleUpdateUser} = useUserContext()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userPassword.length < 5) {
            setSubmitMessage('Password must be at least 5 characters')
        } else {
            handleUpdateUser({email: userEmail})
            navigate('/home')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:
                        <input type="email" value={userEmail} name="userEmail"
                            onChange={(e) => setUserEmail(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>Password:
                        <input type="password" value={userPassword} name="userPassword"
                            onChange={(e) => setUserPassword(e.target.value)} />
                    </label>
                </div>
                <button>Log In</button>
                <p>{submitMessage}</p>
            </form>
        </div>
    )
}