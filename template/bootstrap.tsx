import React, { Suspense } from "react";
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

{{#each routers}}
const {{this.name}} = React.lazy(() => import('../pages{{this.component}}'));
{{/each}}

function Bootstrap () {
    
    return (
        <Router>
            <Suspense fallback={<div />}>
                <Switch>
                    {{#each routers}}
                        <Route path="{{this.component}}">
                            <{{this.name}} />
                        </Route>
                    {{/each}}
                </Switch>
            </Suspense>
        </Router>
    )
}

{{#if rootRender}}
ReactDOM.render(
    <Bootstrap />
    ,
    document.querySelector('#{{this}}')
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