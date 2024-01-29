import { useState } from "react";
import { useMoodContext } from "../context/MoodContext";
import { Button, Typography } from "@mui/material";

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
        else if (mood === "🙁") handleMoodChange("😂")
        else handleMoodChange("😃")
    }

    return (
        <div>
            <Typography variant="h3">Mood </Typography>
            <div>
                {/* {currentMood}
                <button onClick={handleSubmit}>Change mood</button> */}
                {mood}
            </div>
            <div>
                <Button variant="outlined" onClick={() => handleMood()}>Change mood</Button>
            </div>
        </div>
    )
}

export default Emoji;