import React from "react";
import { Link } from "react-router";

const Layout = ( props ) => {
    return (
        <div>
            <h1>React Redux ToDo App</h1>
            { props.children }
        </div>
    );
};

export default Layout;
