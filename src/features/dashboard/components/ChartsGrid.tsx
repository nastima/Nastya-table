import { AgeChart } from "../charts/AgeChart";
import { CityChart } from "../charts/CityChart";

type Props = {
    selectedCity:string;
}

export const ChartsGrid = ({
    selectedCity
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
                    selectedCity={selectedCity}
                />
            </div>

            <div>
                <CityChart
                    selectedCity={selectedCity}
                />
            </div>

            <div>
                {/* третий график позже */}
            </div>

        </div>
    )
}