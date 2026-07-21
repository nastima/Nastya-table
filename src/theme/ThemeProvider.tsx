import {useState} from "react";
import {darkTheme, lightTheme} from "./theme.ts";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeContext} from "./ThemeContext.tsx";

export const AppThemeProvider = ({
     children,
}: {
    children: React.ReactNode;
}) => {
    const [mode, setMode] = useState<'light' | 'dark'>(() => {
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