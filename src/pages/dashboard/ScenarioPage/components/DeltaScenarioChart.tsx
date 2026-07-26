import { Paper, Typography } from "@mui/material";
import type { User } from "../../../../store/api/types.ts";

type Props = {
    baseUsers: User[];
    simulationUsers: User[];
};

export const DeltaScenarioChart = ({baseUsers, simulationUsers}: Props) => {
    return (
        <Paper
            elevation={3}
            className="p-5 rounded-2xl h-80"
        >
            <Typography
                variant="h6"
                fontWeight={600}
            >
                Дельта изменений
            </Typography>

            <div className="flex items-center justify-center h-full text-gray-400">
                База: {baseUsers.length}
                <br />
                Симуляция: {simulationUsers.length}
                <br />
                Здесь будет график ECharts
            </div>
        </Paper>
    );
};