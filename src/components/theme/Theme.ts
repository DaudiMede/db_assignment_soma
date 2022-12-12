import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        primary: {
            //main: '#1ad1ff',
            main: '#1976d2',
            light: '#03a9f4',
            contrastText: '#fff',
        },
        secondary: {
            main: '#1976d2',
            contrastText: '#fff',
        },
        mode: 'light'
    }
});

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            contrastText: '#000',
        },
        mode: 'dark'
    }
});