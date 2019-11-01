import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";

import reducers from "./reducers";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(mySaga);
