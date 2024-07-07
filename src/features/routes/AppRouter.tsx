import { Navigate, Route, Routes } from "react-router-dom";
import { RequestForQuotationApp } from "../requestForQuotation/RequestForQuotationApp";
import { WelcomePage } from "../welcomePage/Welcome";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="welcome" element={<WelcomePage />} />
            <Route path="quotation" element={<RequestForQuotationApp />} />

            <Route path="/*" element={<Navigate to="/welcome" />} />
        </Routes>
    );
}