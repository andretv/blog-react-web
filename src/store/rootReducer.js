import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'
import { reducer as feedReducer } from 'containers/feed'

const rootReducer = combineReducers({
  feed: feedReducer,
  form: formReducer,
})

export default rootReducer