import { Grid, Typography, Button, Paper, Divider } from '@mui/material';
import './welcomeStyles.css'; 
import { useNavigate } from 'react-router-dom';

export const WelcomePage = () => {

    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate('/quotation');
    };


    return (
        <Grid
            className="custom-background"
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12}>
                <Paper elevation={3} className="custom-paper">
                    <Typography variant="h4" align='center'>
                        Tu Chef personal a un click de distancia
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    Te haremos unas preguntas para poder conseguir tu chef soñado
                </Typography>
                <Divider />
                <Button
                    variant="contained"
                    onClick={handleNextPage}
                    fullWidth
                    style={{ background: '#75C659', color: '#1A28A9', marginTop: 20 }}>
                    <Typography variant="button" display="block" gutterBottom>
                        Buscar mi experiencia ideal
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    );
};
