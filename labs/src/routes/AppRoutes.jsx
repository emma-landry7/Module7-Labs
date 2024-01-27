import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";

function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<HomePage {...props} />} />

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;