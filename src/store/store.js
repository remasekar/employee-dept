import { createStore, combineReducers, applyMiddleware} from 'redux'
import valuesReducer from '../reducers/values'
import thunk from 'redux-thunk'

const configStore = () =>
{
    const store = createStore((combineReducers({
                values: valuesReducer
    })), applyMiddleware(thunk))
    return store 
}

export default configStore