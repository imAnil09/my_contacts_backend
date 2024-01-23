import { useSelector } from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';
import Login from '../Pages/Login';
import { LOGIN } from '../ConstantLinks';

export const PublicLayout = () => {
    const AuthReducer = useSelector((Data) => Data?.AuthReducer);

    return !AuthReducer ? (
        <div>
            {/* <Navbar /> */}
            <Outlet />
            {/* <Footer /> */}
        </div>
    ) : <Navigate to={LOGIN} />
}