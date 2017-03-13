import React from "react";

const Filter = ( props ) => {
    const elements = [
        {
            name: "All",
            value: "all"
        },
        {
            name: "Active",
            value: "active"
        },
        {
            name: "Completed",
            value: "completed"
        }
    ];

    const filters = elements.map( ( item, index ) => {
        if ( item.value !== props.filter ){
            return <li onClick={ ( ) => props.setFilter( item.value ) } key={ index }><u>{ item.name }</u></li>
        }
        return <li onClick={ ( ) => props.setFilter( item.value ) } key={ index }><strong>{ item.name }</strong> - ( current filter )</li>
    } )
    return (
        <div>
            <hr/>
            <div>Show </div>
            <ul>
                { filters }
            </ul>
        </div>
    );
};
// const Link = ( { active, children, onClick } ) => {
//     if( active ) {
//         return <span>{ children }</span>
//     }
//     return (
//         <a href="#" onClick={ e => { onClick( ) } }>{ children }</a>
//     )
// }

export default Filter;
