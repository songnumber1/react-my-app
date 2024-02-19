import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../modules';
import { rootSaga } from '../sagas/index';
import { createBrowserHistory } from 'history';
//import logger from 'redux-logger';

export const customHistory = createBrowserHistory({
  forceRefresh: true
});

const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory
  }
}); // 사가 미들웨어를 만듭니다.

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: () => [sagaMiddleware]
    // middleware: () => [sagaMiddleware, logger]
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createStore;
