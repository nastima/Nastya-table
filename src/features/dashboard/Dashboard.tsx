import {AgeChart} from "./charts/AgeChart.tsx";
import {CityChart} from "./charts/CityChart.tsx";
import { useState} from "react";
import {CityFilter} from "./charts/CityFilter.tsx";


export const Dashboard = () => {
    const [selectedCity, setSelectedSity] = useState<string>('all');

    return (
        <div>
            <CityFilter
                selectedCity={selectedCity}
                setSelectedCity={setSelectedSity}
            />

            <div>
                <AgeChart selectedCity={selectedCity} />
                <CityChart selectedCity={selectedCity} />
            </div>
        </div>
    )
}