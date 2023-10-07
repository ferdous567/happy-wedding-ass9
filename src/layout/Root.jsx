import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Header/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;