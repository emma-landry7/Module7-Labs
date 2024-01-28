import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import FormControl from '@mui/material/FormControl';

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
            <FormControl onSubmit={handleSubmit}>
                <div>
                    <TextField variant="outlined" label="Email" type="email" value={userEmail} name="userEmail"
                        onChange={(e) => setUserEmail(e.target.value)} />
                </div>
                <div>
                    <TextField type="password" label="Password" value={userPassword} name="userPassword"
                        onChange={(e) => setUserPassword(e.target.value)} />
                </div>
                <Button variant="outlined">Log In</Button>
                <p>{submitMessage}</p>
            </FormControl>
        </div>
    )
}