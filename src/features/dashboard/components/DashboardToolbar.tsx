import { CityFilter } from "../charts/CityFilter";

type Props = {
    selectedCity: string;
    setSelectedCity: (city:string)=>void;
}

export const DashboardToolbar = ({
     selectedCity,
     setSelectedCity
}:Props)=>{

    return (
        <div>
            <h1>
                Analytics Dashboard
            </h1>

            <CityFilter
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
            />
        </div>
    )
}