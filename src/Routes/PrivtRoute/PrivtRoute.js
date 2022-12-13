import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../Context/AuthProvider';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const PrivtRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex)
    const location = useLocation()

    if(loading){
        return <Spinner></Spinner>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }

    return children
    
};

export default PrivtRoute;