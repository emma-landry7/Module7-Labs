import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import LoginPage from "../pages/LoginPage";
import BitcoinRates from "../components/BitcoinRates";

function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<LoginPage {...props} />} />
            <Route path="home" element={<HomePage {...props} />} />
            <Route path="bitcoin" element={<BitcoinRates {...props} />} />

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;