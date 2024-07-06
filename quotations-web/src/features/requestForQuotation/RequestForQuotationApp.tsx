import { Grid, Paper, Typography } from "@mui/material";
import { RequestQuotation } from "./components/RequestQuotation";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export const RequestForQuotationApp = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid justifyContent="center" container spacing={4}>
                <Grid item>
                    <Typography variant="h3">Tu Chef personal a un click de distancia</Typography>
                    <Typography>Te haremos unas preguntas para poder conseguir tu chef soñado</Typography>
                </Grid>
                <Grid xs={12} item>
                    <Paper className="card-grid">
                        <RequestQuotation />
                    </Paper>
                </Grid>

            </Grid>
        </LocalizationProvider>
    );
}