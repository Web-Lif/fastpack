import React, { useRef } from 'react'

const Layout: React.FC = ({ children }) => {
    console.log('123')
    
    const ref = useRef<HTMLDivElement>(null)
    return (
        <div
            ref={ref}
        >
            这是主要的布局信息
            {children}
        </div>
    )
}

export default Layout