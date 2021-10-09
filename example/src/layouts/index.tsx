import React from 'react'

const Layout: React.FC = ({ children }) => {
    console.log('123')
    return (
        <div>
            这是主要的布局信息
            {children}
        </div>
    )
}

export default Layout