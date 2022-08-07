import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { compose } from "redux";
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(initialState?: any) {
  return createStore(rootReducer, applyMiddleware(thunk));
}

const store = configureStore(composeEnhancers());

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
