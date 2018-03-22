import React from 'react'
// router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// store
import { Provider } from 'react-redux'
import initialState from 'store/initialState'
import configureStore from 'store/configureStore'


const store = configureStore(initialState)

const Root = () =>
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <div>hello</div>} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  </Provider>

export default Root