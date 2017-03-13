import React from "react";

const AddTodoForm = ( { onSubmit } ) => {
    let input;

    return (
        <div>
            <form onSubmit={ e => {
                    e.preventDefault( );
                    const formElements = [].slice.call( e.target.elements );
                    const value = formElements.filter( item => item.name === "todo" )[ 0 ].value;
                    if ( value !== "" ) {
                        onSubmit( value );
                    }
                    e.target.reset();
                } }>
                <input name="todo" />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodoForm;

// return (
//     <div>
//         <form onSubmit={ e => {
//                 e.preventDefault()
//                 onSubmit( input.value )
//             } }>
//             { /*<input ref={ node => { input = node } } /> */ }
//             <button type="submit">Add Todo</button>
//         </form>
//     </div>
