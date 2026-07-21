import {createContext, useContext, useState} from "react";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {darkTheme, lightTheme} from './theme.ts';

type ThemeMode = 'light' | 'dark';
type ThemeContextType = {
    mode: ThemeMode;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const AppThemeProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [mode, setMode] = useState<ThemeMode>(() => {
        const saved = localStorage.getItem('theme');

        return saved === 'light' || saved === 'dark'
            ? saved
            : 'dark';
    });

    const toggleTheme = () => {
        setMode((prev) => {
            const next = prev === 'dark'
                ? 'light'
                : 'dark';

            localStorage.setItem('theme', next);
            return next;
        });
    };

    const theme = mode === 'dark'
        ? darkTheme
        : lightTheme;

    return (
        <ThemeContext.Provider
            value={{
                mode,
                toggleTheme,
            }}
        >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useAppTheme = () => {
    const context = useContext(ThemeContext);

    if(!context) {
        throw new Error('useAppTheme must be used inside AppThemeProvider');
    }

    return context;
};