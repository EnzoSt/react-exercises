import React from 'react';

export function Sum({numbers = []}) {
    return ( 
        <h1>
            Sum is: {numbers.reduce((acc, item) => acc + item, 0)}
        </h1>
    )
}

/*What happens if the numbers prop of the Sum component is not set? How can you set a default value for this prop? */

/*If the numbers prop is not set, we have an error. To resolve this problem, we always should set a default value for the prop.
 In this case, we can set the default value to an empty array.*/