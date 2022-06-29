import { applyMiddleware, combineReducers } from 'redux'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import AuthReducer from '../Redux/Reducer'

const RootReduers = combineReducers({
    auth: AuthReducer
})


const Store = createStore(RootReduers, applyMiddleware(thunk))


export default Store