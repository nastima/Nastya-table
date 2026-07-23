import { AgeChart } from "../charts/AgeChart";
import { ScoreChart } from "../charts/ScoreChart";
import {OnlineChart} from "../charts/OnlineChart.tsx";
import type {User} from "../../../store/api/types.ts";

type Props = {
    users: User[];
    selectedCity:string;
}

export const ChartsGrid = ({
    selectedCity,
    users,
}:Props)=>{

    return (
        <div
            style={{
                display:'grid',
                gridTemplateColumns:
                    'repeat(3, 1fr)',
                gap:20,
            }}
        >
            <div>
                <AgeChart
                    users={users}
                    selectedCity={selectedCity}
                />
            </div>

            <div>
                <ScoreChart/>
            </div>

            <div>
                <OnlineChart
                    users={users}
                    selectedCity={selectedCity}
                />
            </div>

        </div>
    )
}