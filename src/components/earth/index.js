/**
 * Earth Component
 * 
 * React.Componenent because I need lifecycle for
*/

import React from 'react';

function EarthComponent(props){
    return (
        <div className={"earth " + (props.Size ? "smaller" : "")} >
            
        </div>
    )
}

export default EarthComponent