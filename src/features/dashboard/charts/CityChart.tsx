import ReactECharts from "echarts-for-react";
import {useGetUsersQuery} from '../../../store/api/usersApi.ts';
import {useSelector} from "react-redux";
import {selectAllUsers} from "../../../store/users/usersSelectors.ts";

type Props = {
    selectedCity: string;
}

export const CityChart = ({selectedCity}:Props) => {
    const {isLoading} = useGetUsersQuery();
    const users = useSelector(selectAllUsers);

    if(isLoading) {
        return <div>Loading...</div>
    }

    const filtered = selectedCity === 'all'
        ? users
        : users.filter(u => (u.address?.city ?? 'Unknown') === selectedCity);

    const map: Record<string, number> = {};

    for (let i = 0; i < filtered.length; i++) {
        const city = filtered[i].address?.city ?? 'Unknown';
        map[city] = (map[city] || 0) + 1;
    }

    const sorted = Object.entries(map)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

    const options = {
        title: {
            text: 'Top 10 Cities',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            data: sorted.map(([c]) => c),
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: 'Users',
                type: 'bar',
                data: sorted.map(([, v]) => v),
                barWidth: '50%',
            },
        ],
    };

    return (
        <ReactECharts
            option={options}
            style={{height: 400}}
        />
    )
}