import React from "react"

import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"
import './layout.css'

const Layout = () => {
    return (
        <div id="layout">
            <NavBar />
            <div id="page">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout