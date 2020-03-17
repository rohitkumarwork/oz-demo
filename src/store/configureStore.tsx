import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootEpic, rootReducer } from '.';

const epicMiddleware = createEpicMiddleware(rootEpic);

const middleware = [epicMiddleware, logger];

const persistConfig = {
  key: 'root',
  storage,
  timeout: 10000,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const store = createStore(persistedReducer, applyMiddleware(...middleware));

  const persistor = persistStore(store);

  return { store, persistor };
}
