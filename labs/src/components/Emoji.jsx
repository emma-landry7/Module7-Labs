import { useState } from "react";
import { useMoodContext } from "../context/MoodContext";

function Emoji() {
    const [currentMood, setMood] = useState("😃")
    const {mood, handleMoodChange} = useMoodContext()

    // const handleSubmit = () => {
    //     if (currentMood == "😃") setMood("🙁")
    //     else setMood("😃")
    // }

    console.log(mood)
    const handleMood = () => {
        if (mood === "😃") handleMoodChange("🙁")
        else handleMoodChange("😃")
    }

    return (
        <div>
            <h2>Mood </h2>
            <div>
                {/* {currentMood}
                <button onClick={handleSubmit}>Change mood</button> */}
                {mood}
            </div>
            <div>
                    <button onClick={() => handleMood()}>Change mood</button>
            </div>
        </div>
    )
}

export default Emoji;