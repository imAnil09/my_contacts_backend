import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../ConstantLinks";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";

const ProtectedLayout = () => {
    
    const AuthReducer = useSelector((state) => state?.accessToken)

return AuthReducer ?
    <div className="flex flex-col min-h-screen">
        <Navbar />
    <main className="flex-grow">
        <Outlet />
    </main>
        <Footer />
    </div>
 : (
    <Navigate to={LOGIN} />
)
}

export default ProtectedLayout;