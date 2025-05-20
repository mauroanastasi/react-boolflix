import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
    return (
        <>
            <header>
                <MainNav />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout
