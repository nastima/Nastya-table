import {useGetUsersQuery} from "../../../store/api/usersApi.ts";

type Props = {
    selectedCity: string;
    setSelectedCity: (city: string) => void;
};

export const CityFilter = ({selectedCity, setSelectedCity}: Props) => {
    const {data} = useGetUsersQuery();

    const users = data?.users ?? [];

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