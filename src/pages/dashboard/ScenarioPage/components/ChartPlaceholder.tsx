import {Paper, Typography} from "@mui/material";

type Props = {
    title:string;
};

export const ChartPlaceholder = ({
    title
}:Props)=>{
    return (
        <Paper
            elevation={3}
            className="
                p-5
                rounded-2xl
                h-80
            "
        >
            <Typography
                variant="h6"
                fontWeight={600}
            >
                {title}
            </Typography>

            <div
                className="
                    h-full
                    flex
                    items-center
                    justify-center
                    text-gray-400
                "
            >
                Здесь будет график ECharts
            </div>
        </Paper>
    );
};