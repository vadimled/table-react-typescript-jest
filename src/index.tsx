import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./store/reducers";
import { watchSaga } from "./store/saga";
import "antd/dist/antd.css";
import "./css/index.scss";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["searchQuery"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
  sagaMiddleware = createSagaMiddleware(),
  middlewares = [sagaMiddleware];
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
const persistor = persistStore(store);
sagaMiddleware.run(watchSaga);

export type StoreType = ReturnType<typeof store.getState>;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
