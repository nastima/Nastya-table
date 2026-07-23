import { ScenarioParameters } from "./components/ScenarioParameters";
import { ScenarioCharts } from "./components/ScenarioCharts";


export const ScenarioPage = () => {
    return (
        <div className="p-6">

            {/* Заголовок */}
            <div className="mb-6">
                <h1 className="
                    text-3xl
                    font-bold
                ">
                    Сценарное моделирование
                </h1>

                <p className="
                    mt-2
                    text-gray-400
                ">
                    Настройка параметров сценария и анализ
                    прогнозного изменения показателей
                </p>
            </div>

            {/* Основной экран */}
            <div className="
                grid
                grid-cols-12
                gap-6
            ">

                {/* Левая панель параметров */}
                <div className="
                    col-span-4
                ">
                    <ScenarioParameters/>
                </div>

                {/* Правая панель графиков */}
                <div className="
                    col-span-8
                ">
                    <ScenarioCharts/>
                </div>
            </div>
        </div>
    );
};