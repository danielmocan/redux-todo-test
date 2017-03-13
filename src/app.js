import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import routes from "./routes.js";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoState from './reducers'

let store = createStore(
    todoState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById( "app" )
);
