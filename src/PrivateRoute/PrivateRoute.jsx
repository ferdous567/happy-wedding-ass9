import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    const location = useLocation();
    console.log(location.pathname)

    if(loading){
        return <h3 className="text-3xl text-center font-bold ">Loading....</h3>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to = '/login'></Navigate>
};

export default PrivateRoute;