import React, { useState, FC } from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'

import styles from './index.module.less';


const App = () => {
    const [count, setCount] = useState<number>(0)
    const history = useHistory()
    return (
        <div className={styles.mybody}>
            <Button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                点击-次数  {count}
            </Button>

            <Button
                onClick={() => {
                    history.push('/User/Logout')
                }}
            >
                Logout
            </Button>
        </div>
    )
}

export default App