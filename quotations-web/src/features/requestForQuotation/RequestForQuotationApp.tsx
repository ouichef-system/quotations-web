import { Grid } from "@mui/material";
import { RequestQuotation } from "./components/RequestQuotation";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const RequestForQuotationApp = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid
                className="custom-quotations-background"
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                style={{ minHeight: '100vh' }} // Set the minimum height to occupy the full viewport
            >
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <RequestQuotation />
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
};
