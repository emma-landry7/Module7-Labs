import { useContext, createContext, useState } from "react";

const MoodContext = createContext("😃");

export const MoodProvider = (props) => {
    const [currentMood, setCurrentMood] = useState("😃")

    const handleMoodChange = (mood) => {
        setCurrentMood(mood)
    }

    return (
        <MoodContext.Provider value={{currentMood, handleMoodChange}}>
            {props.children}
        </MoodContext.Provider>
    )
}

export const useMoodContext = () => {
    return useContext(MoodContext)
}