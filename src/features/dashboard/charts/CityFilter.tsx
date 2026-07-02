import {useSelector} from "react-redux";
import {selectAllUsers} from "../../../store/users/usersSelectors.ts";

type Props = {
    selectedCity: string;
    setSelectedCity: (city: string) => void;
};

export const CityFilter = ({selectedCity, setSelectedCity}: Props) => {

    const users = useSelector(selectAllUsers)

    const cities = Array.from(
        new Set(users.map(u => u.address?.city ?? 'Unknown'))
    );

    return (
        <div style={{marginBottom: 20}}>
            <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
            >
                <option value='all'>All cities</option>

                {cities.map(city => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
    )
}