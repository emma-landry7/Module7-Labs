import { Typography } from "@mui/material";
import BitcoinRates from "../components/BitcoinRates";
import Emoji from "../components/Emoji";
import NewNavBar from "../components/NewNavBar";

export default function HomePage() {
    return (
        <>
            <Typography variant="h1">Home</Typography>
            <NewNavBar />
            <Typography variant="body1" sx={{ margin: '1rem'}}>The mood below will remain the same between pages!</Typography>
            {/* <BitcoinRates /> */}
            <Emoji />
        </>
    )
}