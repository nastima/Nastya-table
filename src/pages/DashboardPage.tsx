import {useGetUsersQuery} from '../store/api/usersApi.ts';

export const DashboardPage = () => {
    console.log('render dashboard');
    const result = useGetUsersQuery();
    console.log(result);

    if (result.isLoading) return <div>Loading...</div>;

    return (
        <pre>
            {JSON.stringify(result.data, null, 2)}
        </pre>
    )
}