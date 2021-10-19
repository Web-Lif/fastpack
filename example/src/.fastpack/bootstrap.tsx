import React, { Suspense } from "react";
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'




function Bootstrap () {
    return (
        <Router>
            <Suspense fallback={<div />}>
                <Switch>
                </Switch>
            </Suspense>
        </Router>
    )
}

const root = document.createElement("div")
document.body.appendChild(root)
ReactDOM.render(
    <Bootstrap />
    ,
    root
)
