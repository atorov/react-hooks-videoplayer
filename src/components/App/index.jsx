import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotFound from '../NotFound'
import VideoPlayer from '../VideoPlayer'

import Style from "./Style"

const App = () => (
    <BrowserRouter>
        <>
            <Switch>
                <Route path="/" exact component={VideoPlayer} />
                <Route path="/not-found" component={NotFound} />
                <Route path="/:activeVideo" exact component={VideoPlayer} />
                <NotFound />
            </Switch>
            <Style />
        </>
    </BrowserRouter>
)

export default App
