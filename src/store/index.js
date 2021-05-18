import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {cashReducer} from './cashReducer'
import {castomerReducer} from './customerReduser'


const rootReducer = new combineReducers({
  cash: cashReducer, 
  castomers: castomerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))