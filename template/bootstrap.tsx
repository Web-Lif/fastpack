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


function Bootstrap () {
    return (
        <Router>
            {{#if loading}}
            <Suspense fallback={<RouterLoading />}>
            {{/if}}
            {{#unless loading}}
            <Suspense fallback={<div />}>
            {{/unless}}
                <Switch>
                    {{#each routers}}
                    <Route path="{{this.path}}" exact>
                        <Route{{this.name}} />
                    </Route>
                    {{/each}}
                    <Route path="*">
                    {{#if notFound}}
                        <NotFound />
                    {{/if}}
                    </Route>
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
{{/if}}
{{#unless rootRender}}
const root = document.createElement("div")
document.body.appendChild(root)
ReactDOM.render(
    <Bootstrap />
    ,
    root
)
{{/unless}}