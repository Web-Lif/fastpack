import React, { Suspense } from "react";
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

{{#if layout}}
import Layout from '..{{layout}}'
{{/if}}


{{#if loading}}
import RouterLoading from '..{{loading}}'
{{/if}}


{{#each routers}}
const Route{{this.name}} = React.lazy(() => import('../pages{{this.component}}'));
{{/each}}


(window as any).g_routers = [
    {{#each routers}}
    {
        path: '{{this.path}}',
        component: React.lazy(() => import('../pages{{this.component}}'))
    },
    {{/each}}
]


{{#if notFound}}
const NotFound = React.lazy(() => import('..{{notFound}}'))
{{/if}}



function Bootstrap () {
    return (
        <Router
            basename="{{basename}}"
        >
            <Switch>
                {{#eachRouters routers}}
                <Route
                    path="{{this.path}}"
                    exact
                    sensitive
                    render={(props: any) => {
                        {{#if ../layout}}
                        const layout = (
                            <Layout {...props}>
                                {{#if ../loading}}
                                <Suspense fallback={<RouterLoading />}>
                                {{else}}
                                <Suspense fallback={<div />}>
                                {{/if}}
                                    <Route{{this.name}} {...props} />
                                </Suspense>
                            </Layout>
                        )
                        return layout
                        {{else}}
                        const router = (
                            {{#if ../loading}}
                            <Suspense fallback={<RouterLoading />}>
                            {{else}}
                            <Suspense fallback={<div />}>
                            {{/if}}
                                <Route{{this.name}} {...props} />
                            </Suspense>
                        )
                        return router
                        {{/if}}
                    }}
                />
                {{/eachRouters}}
                <Route
                    path="*"
                    render={(props: any) => {
                        {{#if notFound}}
                        const RouterNotFund = <NotFound {...props}/>
                        {{else}}
                        const RouterNotFund = <div />
                        {{/if}}
                        {{#if layout}}
                        const layout = (
                            <Layout {...props}>
                                {{#if ../loading}}
                                <Suspense fallback={<RouterLoading />}>
                                {{else}}
                                <Suspense fallback={<div />}>
                                {{/if}}
                                    {RouterNotFund}
                                </Suspense>
                            </Layout>
                        )
                        return layout
                        {{else}}
                        return RouterNotFund
                        {{/if}}
                    }}
                />
            </Switch>
        </Router>
    )
}

{{#if rootRender}}
ReactDOM.render(
    <Bootstrap />
    ,
    document.querySelector('#{{rootRender}}')
)
{{else}}
const root = document.createElement("div")
root.style.width = '100%'
root.style.height = '100%'
document.body.appendChild(root)
ReactDOM.render(
    <Bootstrap />
    ,
    root
)
{{/if}}