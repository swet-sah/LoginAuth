import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adminpage from './Adminpage';
import Layout from './Layout';
import FundRaiseComponent from './FundRaiseComponent';
import AdminProfilePage from './Profile/AdminProfilepage';

const DashboardPage = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route  path='/dashboard' element={<Adminpage/>} />
                        <Route path='/analytics' element={<FundRaiseComponent/>}/>
                        <Route path='/profile' element={<AdminProfilePage/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default DashboardPage;
