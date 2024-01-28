import BitcoinRates from "../components/BitcoinRates";
import Emoji from "../components/Emoji";
import NewNavBar from "../components/NewNavBar";

export default function HomePage() {
    return (
        <>
            <h1>Home</h1>
            <NewNavBar />
            <p>The mood below will remain the same between pages!</p>
            {/* <BitcoinRates /> */}
            <Emoji />
        </>
    )
}