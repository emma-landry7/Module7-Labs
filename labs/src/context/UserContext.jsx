import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({})

    const handleUpdateUser = (user) => {
        setCurrentUser(user)
        console.log(user)
    }

    return (
        <UserContext.Provider value={{currentUser, handleUpdateUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}