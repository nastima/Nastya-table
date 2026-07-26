import {BaseScenarioCard} from './BaseScenarioCard';
import {SimulationScenarioCard} from './SimulationScenarioCard';
import {DeltaScenarioChart} from './DeltaScenarioChart';
import type { User } from "../../../../store/api/types.ts";

type Props = {
    users: User[];
    simulationUsers: User[];
}


export const ScenarioCharts = ({
    users,
    simulationUsers,
}: Props) => {
    return (
        <div className='flex flex-col gap-6'>
            <div className='grid grid-cols-2 gap-6'>
                <BaseScenarioCard users={users}/>
                <SimulationScenarioCard users={simulationUsers}/>
            </div>

            <DeltaScenarioChart baseUsers={users} simulationUsers={simulationUsers}/>
        </div>
    );
};