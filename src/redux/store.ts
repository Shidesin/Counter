import {counterReducer} from './counterReducer';
import {combineReducers, createStore} from 'redux';


const rootReducer = combineReducers({counter:counterReducer});


export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;