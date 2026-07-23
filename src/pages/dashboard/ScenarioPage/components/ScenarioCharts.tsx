import { ChartPlaceholder } from "./ChartPlaceholder";


export const ScenarioCharts = () => {
    return (
        <div className="
            flex
            flex-col
            gap-6
        ">
            <ChartPlaceholder
                title="Базовый сценарий"
            />

            <ChartPlaceholder
                title="Симуляционный сценарий"
            />

            <ChartPlaceholder
                title="Дельта изменений"
            />
        </div>
    );
};