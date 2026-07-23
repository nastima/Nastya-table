import {DashboardToolbar} from "./components/DashboardToolbar.tsx";
import {ChartsGrid} from "./components/ChartsGrid.tsx";
import type {User} from "../../store/api/types.ts";

type Props = {
    users: User[];
    selectedCity: string;
    setSelectedCity: (city:string)=>void;
};

export const Dashboard = ({users, selectedCity, setSelectedCity}:Props) => {

    return (
        <div>
            <DashboardToolbar
                selectedCity = {selectedCity}
                setSelectedCity={setSelectedCity}
            />
            <ChartsGrid
                users={users}
                selectedCity = {selectedCity}
            />
        </div>
    )
}