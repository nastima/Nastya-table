import ReactECharts from "echarts-for-react";
import type {User} from "../../../store/api/types.ts";
import { useFilteredUsers } from "../../../hooks/useFilteredUsers.ts";

type Props = {
    users: User[];
    selectedCity: string;
};

export const OnlineChart = ({ users, selectedCity }: Props) => {

    const filteredUsers = useFilteredUsers(
        users,
        selectedCity
    );

    const online = filteredUsers.filter(
        user => user.status === "online",
    ).length;

    const offline = filteredUsers.length - online;

    const option = {
        title: {
            text: 'Users Online',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
        },
        legend: {
            orient: 'horizontal',
            bottom: '0',
        },
        series: [
            {
                name: 'Status',
                type: 'pie',
                radius: '60%',
                data: [
                    {
                        value: online,
                        name: 'Online',
                    },
                    {
                        value: offline,
                        name: 'Offline',
                    },
                ],

                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                    },
                },
            },
        ],
    };

    return (
        <ReactECharts
            option={option}
            style={{
                height: 350,
            }}
        />
    )
}