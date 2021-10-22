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

{{#if notFound}}
const NotFound = React.lazy(() => import('..{{notFound}}'))
{{/if}}

function Bootstrap () {
    return (
        <Router>
            <Switch>
                {{#each routers}}
                <Route
                    path="{{this.path}}"
                    exact
                    render={props => {
                        {{#if ../layout}}
                        const layout = (
                            <Layout {...props}>
                                {{#if ../loading}}
                                <Suspense fallback={<RouterLoading />}>
                                {{else}}
                                <Suspense fallback={<div />}>
                                {{/if}}
                                    <Route{{this.name}} />
                                </Suspense>
                            </Layout>
                        )
                        return layout
                        {{else}}
                        const router = (
                            <Route{{this.name}} />
                        )
                        return router
                        {{/if}}
                    }}
                />
                {{/each}}
                {{#if notFound}}
                <Route
                    path="*"
                    render={props => {
                        const RouterNotFund = <NotFound />
                        {{#if layout}}
                        const layout = (
                            <Layout {...props}>
                                {RouterNotFund}
                            </Layout>
                        )
                        return layout
                        {{else}}
                        return router
                        {{/if}}
                    }}
                />
                {{/if}}
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