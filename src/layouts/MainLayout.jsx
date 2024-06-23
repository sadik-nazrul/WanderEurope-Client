import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div className="font-primary">
            <Header />
            <div className="min-h-[calc(100vh-417px)]">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;