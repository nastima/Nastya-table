import ReactECharts from 'echarts-for-react';
import {useSelector} from "react-redux";
import {selectAllUsers} from "../../../store/users/usersSelectors.ts";
import {useGetUsersQuery} from "../../../store/api/usersApi.ts";

type Props = {
    selectedCity: string;
}

export const AgeChart = ({selectedCity}:Props) => {
    const users = useSelector(selectAllUsers);
    const {isLoading} = useGetUsersQuery();

    if(isLoading) {
        return <div>Loading...</div>;
    }

    const filtered = selectedCity === 'all'
        ? users
        : users.filter(u => (u.address?.city ?? 'Unknown') === selectedCity);

    const groups = {
        '18-25': 0,
        '26-35': 0,
        '36-45': 0,
        '46-55': 0,
        '56+': 0,
    }

    for(const user of filtered) {
        if(!user) continue;

        const age = user.age;

        if (age <= 25) groups['18-25']++;
        else if (age <= 35) groups['26-35']++;
        else if (age <= 45) groups['36-45']++;
        else if (age <= 55) groups['46-55']++;
        else groups['56+']++;

    }

    const option = {
        title: {
            text: 'Users by Age',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            data: Object.keys(groups),
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: 'Users',
                type: 'bar',
                data: Object.values(groups),
                barWidth: '50%',
            },
        ],
    };

    return (
        <ReactECharts
            option={option}
            style={{ height: 400 }}
        />
    );
};