import React from 'react'

// router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// store
import { Provider } from 'react-redux'
import initialState from 'store/initialState'
import configureStore from 'store/configureStore'

const store = configureStore(initialState)

// containers
import Wrapper from 'containers/wrapper'
import Feed from 'containers/feed'

const Root = () =>
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <Route exact path='/' component={Feed} />
          <Route exact path='/my-posts' component={Feed} />
          <Redirect to='/' />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  </Provider>

export default Root