import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <>
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-8">
                        <Outlet />
                    </div>
                </div>

        </>
    )
}

export default Layout
