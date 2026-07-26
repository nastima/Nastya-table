import {useMemo} from "react";
import type {User} from '../store/api/types.ts';

export const useScenarioMetrics = (users: User[]) => {
    return useMemo(() => {
        if(!users.length) {
            return {
                totalUsers: 0,
                averageScore: 0,
                averegeAge: 0,
                onlinePercent: 0,
            };
        }

        const totalUsers = users.length;

        const averageScore = Math.round(users.reduce(
            (sum, user) => sum + user.score, 0
        ) / totalUsers
        );

        const averageAge =
            Math.round(
                users.reduce(
                    (sum, user) => sum + user.age,
                    0
                ) / totalUsers
            );

        const onlineUsers = users.filter(
            user => user.status === "online"
        ).length;

        const onlinePercent = Math.round(
            (onlineUsers / totalUsers) * 100
        );

        return {
            totalUsers,
            averageScore,
            averageAge,
            onlinePercent,
        };
    }, [users]);
};