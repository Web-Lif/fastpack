import React, { Suspense } from "react";
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
{{#if loading}}
import RouterLoading from '..{{loading}}'
{{/if}}

{{#each routers}}
const Route{{this.name}} = React.lazy(() => import('../pages{{this.component}}'));
{{/each}}

{{#if notFound}}
const NotFound = React.lazy(() => import('..{{notFound}}'))
{{/if}}

{{#if layout}}
const Layout = React.lazy(() => import('..{{layout}}'))
{{/if}}

function Bootstrap () {
    return (
        <Router>
            {{#if loading}}
            <Suspense fallback={<RouterLoading />}>
            {{else}}
            <Suspense fallback={<div />}>
            {{/if}}
                <Switch>
                    {{#each routers}}
                    <Route
                        path="{{this.path}}"
                        exact
                        render={props => {
                            {{#if ../layout}}
                            const layout = (
                                <Layout {...props}>
                                    <Route{{this.name}} />
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
            </Suspense>
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
document.body.appendChild(root)
ReactDOM.render(
    <Bootstrap />
    ,
    root
)
{{/if}}