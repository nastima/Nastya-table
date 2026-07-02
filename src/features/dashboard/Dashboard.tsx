import {AgeChart} from "./charts/AgeChart.tsx";
import {CityChart} from "./charts/CityChart.tsx";
import { useState} from "react";
import {CityFilter} from "./charts/CityFilter.tsx";
import {useWebSocket} from "../../hooks/useWebSocket.ts";


export const Dashboard = () => {
    useWebSocket();
    const [selectedCity, setSelectedCity] = useState<string>('all');

    return (
        <div>
            <CityFilter
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
            />

            <div>
                <AgeChart selectedCity={selectedCity} />
                <CityChart selectedCity={selectedCity} />
            </div>
        </div>
    )
}