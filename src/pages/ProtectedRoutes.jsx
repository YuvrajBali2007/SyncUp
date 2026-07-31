import { Children } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({Children}) => {
    const isLoggedIn = localStorage.getItem("LoggedIn");
    if(isLoggedIn != "true" ){
        return <Navigate to ="/"/> 
    }
    return <Outlet/>;
}
    export default ProtectedRoutes;