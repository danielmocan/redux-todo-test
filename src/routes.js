import React from "react";
import { Router, IndexRoute, Route, browserHistory } from "react-router";
import Layout from "./layout.react";
import TodoListPage from "./pages/todoListPage.react";

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={TodoListPage} />
    </Route>
);

export default routes;
