import {DashboardToolbar} from "./components/DashboardToolbar.tsx";
import {ChartsGrid} from "./components/ChartsGrid.tsx";

type Props = {
    selectedCity: string;
    setSelectedCity: (city:string)=>void;
};

export const Dashboard = ({selectedCity, setSelectedCity}:Props) => {

    return (
        <div>
            <DashboardToolbar
                selectedCity = {selectedCity}
                setSelectedCity={setSelectedCity}
            />
            <ChartsGrid
                selectedCity = {selectedCity}
            />
        </div>
    )
}