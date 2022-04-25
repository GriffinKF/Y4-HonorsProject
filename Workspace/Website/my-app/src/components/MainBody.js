import React from "react"
import Blurb from "./Blurb"
import InitialGrid from "./InitialGrid"
import StateSelector from "./StateSelector"

function MainBody() {
    return(
        <body style={{backgroundColor: 'darkgrey', marginBottom: 56}}>
            <Blurb />
            <br></br>
            <InitialGrid />
            <br></br>
            <StateSelector />
            <br></br>
        </body> 
    )
}

export default MainBody