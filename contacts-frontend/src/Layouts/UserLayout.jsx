import { Navigate, Outlet } from "react-router-dom";
import { HOME } from "../ConstantLinks";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";

const UserLayout = () => {
    const accesstoken = useSelector((state) => state?.accessToken)

return !accesstoken ?  (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
    <Outlet />  
      </main>
    <Footer />
    </div>
) : (
    <Navigate to={HOME} />
)
}

export default UserLayout;