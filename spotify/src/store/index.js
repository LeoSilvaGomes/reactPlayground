import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import reducers from "./ducks";

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console?.tron?.createSagaMiddleware()
    : null;
const sagaMiddlware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddlware);

const createAppropriateStore =
  process.env.NODE_ENV === "development"
    ? console.tron.createStore
    : createStore;

const store = createAppropriateStore(
  reducers,
  compose(applyMiddleware(...middlewares))
);

sagaMiddlware.run(sagas);

export default store;
