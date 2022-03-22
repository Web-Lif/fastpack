import React from "react";
import ReactDOM from 'react-dom'

import Vue from 'vue'


const VueWrapper = ({
    component,
    ...restProps
}: any) => {
    const ref = React.useRef<HTMLDivElement>(null)
    React.useLayoutEffect(() => {
        new Vue({
            render: render => render(component),
            props: restProps
        }).$mount(ref.current);
    }, [])

    return <div ref={ref}/>
}


const extRouters = [
    {
        path: '/test/',
        component: React.lazy(() => import( /* webpackPrefetch: true */ '../pages'))
    },
    {
        path: '/test/User/Login',
        component: React.lazy(() => import( /* webpackPrefetch: true */ '../pages/User/Login'))
    },
] as any

const vueRouters = [
    {
        path: '/test/test.vue'.replace('.', '-'),
        component: React.lazy(
            async () => {
                const component = await import('../pages/test.vue')
                return ({
                    default: (props: any) => (
                        <VueWrapper component={component.default} {...props} />
                    )
                })
            }
        )
    },
] as any

const routers = extRouters.concat(vueRouters)

export {
    routers,
}
