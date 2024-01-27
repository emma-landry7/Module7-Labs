import { useState } from "react";
import { useMoodContext } from "../context/MoodContext";

function Emoji() {
    const [currentMood, setMood] = useState("😃")
    const {mood, handleMoodChange} = useMoodContext()

    // const handleSubmit = () => {
    //     if (currentMood == "😃") setMood("🙁")
    //     else setMood("😃")
    // }

    const handleMood = (e) => {
        e.preventDefault()
        if (mood.emoji === "😃") handleMoodChange({emoji: "🙁"})
        else handleMoodChange({emoji: "😃"})
    }

    return (
        <div>
            <h2>Mood </h2>
            <div>
                {/* {currentMood} */}
                {/* <button onClick={handleSubmit}>Change mood</button> */}
                {mood.emoji}
            </div>
            <div>
                <form onSubmit={handleMood}>
                    <button onClick={() => handleMoodChange({})}>Change mood</button>
                </form>
                
            </div>
        </div>
    )
}

export default Emoji;