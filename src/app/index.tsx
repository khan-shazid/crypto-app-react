import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {  Outlet } from "react-router";

import UserLayout from "./layouts/user-layout";

const UserRoute = () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    return (
        <UserLayout>
            <Outlet />
        </UserLayout>
    )
    // return token && role === 'user' ? (
    //     <UserLayout>
    //         <Outlet />
    //     </UserLayout>
    // ) : <Navigate to="/"/>;
};

const Test = () => {
    return (
        <div>testing name</div>
    )
}

function App() {
    return (
        <Routes>
            <Route element={<UserRoute />}>
                <Route path="/" element={<Test />}/>
            </Route>
        </Routes>
    );
}

export default App;
