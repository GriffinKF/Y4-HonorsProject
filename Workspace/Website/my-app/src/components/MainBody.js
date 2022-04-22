import React from "react"
import Blurb from "./Blurb"
import InitialGrid from "./InitialGrid"
import States from "./States"

function MainBody() {
    return(
        <body style={{backgroundColor: 'darkgrey', marginBottom: 56}}>
            <Blurb />
            <br></br>
            <InitialGrid />
            <br></br>
            <States />
            <br></br>
        </body> 
    )
}

export default MainBody