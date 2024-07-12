import { Navigate, Route, Routes } from "react-router-dom";
import { RequestForQuotationApp } from "../requestForQuotation/RequestForQuotationApp";
import { WelcomePage } from "../welcomePage/Welcome";
import { ThankYouPage } from "../thankYouPage/ThankYouPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="welcome" element={<WelcomePage />} />
            <Route path="quotation" element={<RequestForQuotationApp />} />
            <Route path="thank-you" element={<ThankYouPage />} />

            <Route path="/*" element={<Navigate to="welcome" />} />
            <Route path="/welcome" element={<Navigate to="welcome" />} />
        </Routes>
    );
}