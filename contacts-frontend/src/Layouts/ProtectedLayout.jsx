import { useSelector } from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';
import Login from '../Pages/Login';
import { LOGIN } from '../ConstantLinks';

export const ProtectedLayout = () => {
    const AuthReducer = useSelector((Data) => Data?.AuthReducer);

    if(AuthReducer){
        // return <NotFound />
    } else {
        // return <Navigate to={LOGIN} />
    }

    return AuthReducer ? (
        <div>
            {/* <Navbar /> */}
            <Outlet />
            {/* <Footer /> */}
        </div>
    ) : <Navigate to={LOGIN} />
}