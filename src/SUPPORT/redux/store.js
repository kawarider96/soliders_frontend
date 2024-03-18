import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import messageReducer from './reducers/messageReducers';
import paginationReducer from './reducers/paginationReducers';
import solidersReducer from './reducers/solidersReducers';
import optionsReducer from './reducers/optionsReducers';
import booleansReducer from './reducers/booleansReducers';
import datapageReducer from './reducers/datapageReducers';
import styleReducer from './reducers/styleReducer';

const rootReducer = combineReducers({
    message: messageReducer,
    pagination: paginationReducer,
    soliders: solidersReducer,
    options: optionsReducer,
    booleans: booleansReducer,
    datapage: datapageReducer,
    style: styleReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
