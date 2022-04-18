import React from "react"
import Blurb from "./Blurb"
import InitialGrid from "./InitialGrid"

function MainBody() {
    return(
        <body style={{backgroundColor: 'darkgrey', marginBottom: 56}}>
            <Blurb />
            <InitialGrid />
        </body> 
    )
}

export default MainBody