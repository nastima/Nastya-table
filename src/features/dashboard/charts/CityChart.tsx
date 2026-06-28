import ReactECharts from "echarts-for-react";
import {useGetUsersQuery} from '../../../store/api/usersApi.ts';

type Props = {
    selectedCity: string;
}

export const CityChart = ({selectedCity}:Props) => {
    const {data, isLoading} = useGetUsersQuery();

    if(isLoading) {
        return <div>Loading...</div>
    }

    const users = data?.users ?? [];

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