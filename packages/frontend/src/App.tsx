import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Layout } from 'layouts'
import { Home } from 'pages'

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
  </Layout>
)

export default App
