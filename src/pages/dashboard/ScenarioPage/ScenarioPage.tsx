import { ScenarioParameters } from "./components/ScenarioParameters";
import { ScenarioCharts } from "./components/ScenarioCharts";
import {selectAllUsers} from "../../../store/users/usersSelectors.ts";
import {useSelector} from "react-redux";
import {useState} from "react";
import type {User} from "../../../store/api/types.ts";
import {useSimulateScenarioMutation} from "../../../store/api/scenarioApi.ts";
import type {ScenarioFormData} from "../../../shared/schemas/ScenarioSchema.ts";


export const ScenarioPage = () => {
    const users = useSelector(selectAllUsers);
    const [simulationUsers, setSimulationUsers] = useState<User[]>([]);
    const [simulateScenario, {isLoading}] = useSimulateScenarioMutation();

    const handleSimulation = async (params: ScenarioFormData) => {
        const result = await simulateScenario({
            users,
            params,
        }).unwrap();

        setSimulationUsers(result);
    }

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
                    <ScenarioParameters
                        onSubmit={handleSimulation}
                        isLoading={isLoading}
                    />
                </div>

                {/* Правая панель графиков */}
                <div className="
                    col-span-8
                ">
                    <ScenarioCharts
                        users={users}
                        simulationUsers={simulationUsers}
                    />
                </div>
            </div>
        </div>
    );
};