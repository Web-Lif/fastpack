import React from "react";
import ReactDOM from 'react-dom'
import Bootstrap, { routers, bootstrapRouters } from './frame'

(window as any).g_routers = routers.concat(bootstrapRouters)

if (document.querySelector('#root')) {
    ReactDOM.render(
        <Bootstrap routers={bootstrapRouters} />
        ,
        document.querySelector('#root')
    )
} else {
    const root = document.createElement("div")
    root.setAttribute('id', 'root')
    root.style.width = '100%'
    root.style.height = '100%'
    document.body.appendChild(root)
    ReactDOM.render(
        <Bootstrap routers={bootstrapRouters} />
        ,
        root
    )
}