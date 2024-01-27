import { useContext, createContext, useState } from "react";

const MoodContext = createContext("😃");

export const MoodProvider = (props) => {
    const [mood, setCurrentMood] = useState("😃")

    const handleMoodChange = (mood) => {
        setCurrentMood(mood)
    }

    return (
        <MoodContext.Provider value={{mood, handleMoodChange}}>
            {props.children}
        </MoodContext.Provider>
    )
}

export const useMoodContext = () => {
    return useContext(MoodContext)
}