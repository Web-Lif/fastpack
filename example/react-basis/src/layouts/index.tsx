import React, { useRef } from 'react'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
    console.log('123')
    
    const ref = useRef<HTMLDivElement>(null)
    return (
        <div
            ref={ref}
        >
            <Outlet />
        </div>
    )
}

export default Layout