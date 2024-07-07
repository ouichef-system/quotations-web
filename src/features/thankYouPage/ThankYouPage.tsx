import { Grid, Typography, Paper } from '@mui/material';
import './thankYouStyles.css';
import backGroundImage from '../assets/welcome_background.svg';


export const ThankYouPage = () => {

    return (
        <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            style={{
                backgroundImage: `url(${backGroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                padding: '20px'
            }}
        >
            <Grid item xs={12}>
                <Paper elevation={3} className="custom-paper">
                    <Typography variant="h4" align='center'>
                        ¡Gracias por completar el formulario!
                    </Typography>
                    <br />
                    <Typography align="left">
                        Te estaremos notificando por correo cuando te vayan llegando cotizaciones.<br />
                        Te contactaremos por WhatsApp al número descrito con preguntas extras.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};
