import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { auth } from '../../firebase.init';
import Spiner from '../Spiner/Spiner';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const OutletContainer = () => {
    const [user, loading] = useAuthState(auth)
    console.log(user)
    const location = useLocation()
    if(loading) return <Spiner/>
    return (
     
      <div>
        {
            user && user.emailVerified ?<> <Header />
            <Sidebar /> <Outlet /></>  : <Navigate to="/login" state={{ from: location }} replace />
        }
      </div>
       
    );
};

export default OutletContainer;