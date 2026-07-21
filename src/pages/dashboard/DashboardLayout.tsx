import {Outlet} from 'react-router-dom';
import {Header} from '../../components/Header/Header.tsx';

export const DashboardLayout = () => {
    return (
        <div className='min-h-screen bg-slate-950 text-slate-100'>
            <Header />

            <main className='p-6'>
                <Outlet />
            </main>
        </div>
    )
}