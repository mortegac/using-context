import React from 'react';
import { myFirstContext } from '../../App'

function List(){
return(
    <ul>
        <myFirstContext.Consumer>
            {
                (data) => (
                    data.map((member,i) => (
                        <li key={i}>{member}</li>
                    ))
                )
            }
        </myFirstContext.Consumer>
    </ul>

);
}


export default List;