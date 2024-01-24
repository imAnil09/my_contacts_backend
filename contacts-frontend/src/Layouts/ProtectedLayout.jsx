import { Outlet, useNavigate } from "react-router-dom";
import { LOGIN } from "../ConstantLinks";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ProtectedLayout = () => {
    const navigate = useNavigate();
    const [AuthReducer, setAuthReducer] = useState('');

    useEffect(() => {
      const accessToken = JSON.parse(localStorage.getItem('accessToken'));
      if (accessToken) {
        setAuthReducer(accessToken);
        console.log(accessToken, 'accessToken')

      }
    }, []);
return AuthReducer ?
    <div className="flex flex-col min-h-screen">
        <Navbar />
    <main className="flex-grow">
        <Outlet />
    </main>
        <Footer />
    </div>
 : (
    navigate(LOGIN)
)
}

export default ProtectedLayout;