import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotFound from '../NotFound'
import VideoPlayer from '../VideoPlayer'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={VideoPlayer} />
            <Route path="/:activeVideo" exact component={VideoPlayer} />
            <NotFound />
        </Switch>
    </BrowserRouter>
)

export default App
