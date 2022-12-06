import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex flex-col items-center justify-center mt-72">
           <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-green-400"></div>
        </div>
    }

    if(user){
    return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;