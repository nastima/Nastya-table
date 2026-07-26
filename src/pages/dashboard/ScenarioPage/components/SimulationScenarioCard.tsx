import {Paper, Typography} from "@mui/material";
import type { User } from "../../../../store/api/types.ts";

type Props = {
    users: User[];
};

export const SimulationScenarioCard = ({users} : Props) => {
    return (
        <Paper
            elevation={3}
            className="p-5 rounded-2xl h-72"
        >
            <Typography
                variant="h6"
                fontWeight={600}
            >
                Симуляционный сценарий
            </Typography>

            <div className="flex items-center justify-center h-full text-gray-400">
                Пользователей: {users.length}
                <br />
                Здесь будет график ECharts
            </div>
        </Paper>
    )
}
