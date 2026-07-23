import { Box, Paper, Typography } from "@mui/material";
import mapImage from "../../assets/images.png";


export const MapPage = () => {
    return (
        <Box
            sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: 3,
            }}
        >

            <Box>
                <Typography variant="h4" fontWeight={700}>
                    Map Page
                </Typography>

                <Typography
                    variant="body1"
                    color="text.secondary"
                    mt={1}
                >
                    Интерактивная карта распределения данных
                    и пространственного анализа объектов
                </Typography>
            </Box>

            <Paper
                elevation={3}
                sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    height: 600,
                }}
            >
                <Box
                    component="img"
                    src={mapImage}
                    alt="Map preview"
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Paper>
        </Box>
    );
};