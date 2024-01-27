import BitcoinRates from "../components/BitcoinRates";
import Emoji from "../components/Emoji";
import NavBar from "../components/NavBar";

export default function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <NavBar />
            <p>The mood below will remain the same between pages!</p>
            {/* <BitcoinRates /> */}
            <Emoji />
        </div>
    )
}