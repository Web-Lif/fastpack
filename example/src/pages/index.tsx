import React, { useState } from 'react'
import { Button } from 'antd'

const App = () => {
    const [count, setCount] = useState<number>(0)
    
    return (
        <div className="home">
            <Button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                点击-次数  {count}
            </Button>
        </div>
    )
}

export default App