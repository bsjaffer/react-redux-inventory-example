import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import reducer from './reducers'
import InventoryContainer from './containers/inventoryContainer';

import './index.css';

const logger = createLogger()
const store = createStore(
    reducer,
    applyMiddleware(logger)
)


render(
    <Provider store={store}>
        <InventoryContainer />
    </Provider>,
    document.getElementById('root')
);
