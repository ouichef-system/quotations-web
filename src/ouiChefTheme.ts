import { createTheme, responsiveFontSizes } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: {
            main: '#24619f'
        },
        secondary: {
            main: '#000'
        },
        background: {
            paper: '#EDEBDF'
        }
    }
});

export const ouiChefTheme = responsiveFontSizes(theme);