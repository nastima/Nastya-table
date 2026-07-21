import { createTheme} from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2563EB'
        },
        background: {
            default: '#F5F7FA',
            paper: '#FFF',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3B82F6',
        },
        background: {
            default: '#0F172A',
            paper: '#1E293B',
        },
    },
});