import React from "react";
import AddTodoForm from "../components/addTodo.react";
import TodoList from "../components/todoList.react";
import Filter from "../components/filter.react";

import { addTodo, toggleTodo, setVisibilityFilter } from "../actions";
import { connect } from "react-redux";

const TodoListPage = ( props ) => {
    return (
        <div>
            <h2>Todo List Page</h2>
            <div>
                <AddTodoForm onSubmit={ props.addTodo }/>
                <TodoList  todos={props.todos} filter={ props.filter } onTodoClick={ props.toggleTodo }/>
                <Filter setFilter={ props.setFilter } filter={ props.filter }/>
            </div>
        </div>
    );
};

const mapStateToProps = ( state ) => {
    return {
        todos: state.todo,
        filter: state.visibilityFilter
    }
}
const mapDispatchToProps = ( dispatch ) => {
    return {
        addTodo: ( value ) => dispatch( addTodo( value ) ),
        toggleTodo: ( id ) => dispatch( toggleTodo( id ) ),
        setFilter: ( filter ) => dispatch( setVisibilityFilter( filter) )
    }
}


export default connect( mapStateToProps, mapDispatchToProps )( TodoListPage );
