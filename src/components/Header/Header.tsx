import { NavLink, useLocation } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";
import { useAppTheme } from "../../theme/ThemeContext.tsx";


const pages = [
    {
        label: 'Analytics',
        path: '/dashboard',
    },
    {
        label: 'Map',
        path: '/dashboard/map',
    },
    {
        label: 'Scenario',
        path: '/dashboard/scenario',
    },
    {
        label: 'Reports',
        path: '/dashboard/reports',
    }
];


export const Header = () => {
    const location = useLocation();
    const theme = useTheme();
    const { mode, toggleTheme } = useAppTheme();


    return (
        <AppBar
            position="sticky"
            sx={{
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                boxShadow: 'none',
                borderBottom: `1px solid ${theme.palette.divider}`,
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    gap={5}
                >
                    <Typography
                        variant="h6"
                        fontWeight={700}
                    >
                        Insight Analytics
                    </Typography>

                    <Box
                        display="flex"
                        gap={1}
                    >
                        {pages.map((page) => {
                            const active =
                                location.pathname === page.path;

                            return (
                                <Button
                                    key={page.path}
                                    component={NavLink}
                                    to={page.path}
                                    sx={{
                                        color: active
                                            ? theme.palette.primary.main
                                            : theme.palette.text.secondary,

                                        textTransform: 'none',

                                        fontWeight: active
                                            ? 700
                                            : 500,
                                    }}
                                >
                                    {page.label}
                                </Button>
                            )
                        })}
                    </Box>
                </Box>

                <Box
                    display="flex"
                    alignItems="center"
                    gap={1}
                >
                    <Typography>
                        Analyst
                    </Typography>

                    <IconButton
                        onClick={toggleTheme}
                        color="inherit"
                    >
                        {
                            mode === 'dark'
                                ? <LightModeIcon />
                                : <DarkModeIcon />
                        }
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}