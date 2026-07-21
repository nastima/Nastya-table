import {createContext, useContext} from "react";

type ThemeMode = 'light' | 'dark';

type ThemeContextType = {
    mode: ThemeMode;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useAppTheme = () => {
    const context = useContext(ThemeContext);

    if(!context) {
        throw new Error('useAppTheme must be used inside AppThemeProvider');
    }

    return context;
};