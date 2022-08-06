import {combineReducers, legacy_createStore as createStore} from "redux";
import mainPageReducer from "./mainPage-reducer";
import catalogReducer from "./catalog-reducer";
import ingredientForFilterReducer from "./filter-reducer";

let reducers = combineReducers({
    mainPage: mainPageReducer,
    catalog: catalogReducer,
    filter: ingredientForFilterReducer
});

let store = createStore(reducers);

export default store;