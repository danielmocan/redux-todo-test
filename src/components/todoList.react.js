import React from "react";
const TodoList = ( { todos, onTodoClick, filter } ) => {
    if ( todos.length === 0 ){
        return <div>Add Todos First</div>
    }
    const  list = returnList( todos, filter );
    return (
        <ul>
            { list.map( ( todo ) =>{
                if( todo.completed ) {
                    return <li key={todo.id} onClick={ ( ) => onTodoClick( todo.id ) }><strike>{ todo.text }</strike></li>
                }
                return <li key={todo.id} onClick={ ( ) => onTodoClick( todo.id ) }>{ todo.text }</li>
            }
            ) }
        </ul>
    )
}

export default TodoList;

function returnList( list, filter ) {
    if( filter === "completed" ){
        return list.filter( ( item ) => item.completed );
    }else if ( filter === "active" ){
        return list.filter( ( item ) => !item.completed );
    }

    return list;
}
