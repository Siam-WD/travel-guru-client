import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderLite from '../Pages/HeaderLite/HeaderLite';

const LoginLayout = () => {
    return (
        <div>
            <HeaderLite></HeaderLite>
            this is login layout
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;