import {useSelector} from 'react-redux';
import type {RootState} from '../store/store';
import {Navigate, Outlet} from 'react-router-dom';

export const ProtectedRoute = () => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth );

    if(!isAuth) {
        return <Navigate to='/' replace />
    }

    return <Outlet/>
}