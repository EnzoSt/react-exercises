import React from 'react';

export function Sum({numbers}) {
    return ( 
        <h1>
            Sum is: {numbers.reduce((acc, item) => acc + item, 0)}
        </h1>
    )
}