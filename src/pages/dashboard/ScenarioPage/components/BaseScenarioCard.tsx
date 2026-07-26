import {Divider, Paper, Typography} from '@mui/material';
import {useScenarioMetrics} from "../../../../hooks/useScenarioMetrics.ts";
import type {User} from "../../../../store/api/types.ts";

type Props = {
    users: User[];
};

export const BaseScenarioCard = ({users}: Props) => {

    const metrics = useScenarioMetrics(users);
    return (
        <Paper
            elevation={3}
            className="p-5 rounded-2xl h-72 flex flex-col"
        >
            <Typography
                variant="h6"
                fontWeight={600}
            >
                Базовый сценарий
            </Typography>

            {/* Здесь позже будет ECharts */}
            <div
                className="
                    flex-1
                    flex
                    items-center
                    justify-center
                    text-gray-400
                "
            >
                Здесь будет график
            </div>

            <Divider className="mb-3" />

            <div className="grid grid-cols-2 gap-y-2 text-sm">

                <div>
                    <Typography color="text.secondary">
                        Пользователей
                    </Typography>

                    <Typography fontWeight={600}>
                        {metrics.totalUsers}
                    </Typography>
                </div>

                <div>
                    <Typography color="text.secondary">
                        Средний Score
                    </Typography>

                    <Typography fontWeight={600}>
                        {metrics.averageScore}
                    </Typography>
                </div>

                <div>
                    <Typography color="text.secondary">
                        Средний возраст
                    </Typography>

                    <Typography fontWeight={600}>
                        {metrics.averageAge}
                    </Typography>
                </div>

                <div>
                    <Typography color="text.secondary">
                        Online
                    </Typography>

                    <Typography fontWeight={600}>
                        {metrics.onlinePercent}%
                    </Typography>
                </div>

            </div>
        </Paper>
    )
}