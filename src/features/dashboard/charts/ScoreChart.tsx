import ReactECharts from "echarts-for-react";
import {useSelector} from "react-redux";
import {selectScoreHistory} from "../../../store/scoreHistory/scoreHistorySelectors.ts";


export const ScoreChart = () => {

    const points = useSelector(selectScoreHistory);

    const options = {
        title: {
            text: 'Average Score',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            data: points.map(
                point => point.time
            ),
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: 'Score',
                type: 'line',
                data: points.map(
                    point => point.value
                ),
                smooth: true,
                symbol: 'circle',
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