import React from 'react';

const List = props => {

    const {items} = props;

    return (
        <ul>
            {
                items.map( (item, key) => (
                    
                    <li 
                        key={key} 
                        className={item.complete ? 'complete' : 'pending'}
                    >
                        <h2>Tu numero anterior fue: {item.task}</h2>
                    </li>
                ))
            }
        </ul>
    );
}

export default List;