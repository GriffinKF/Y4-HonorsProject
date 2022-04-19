import React from "react"
import ComparisonBlurb from "./ComparisonBlurb"

function ComparisonPage() {
    const ID = window.location.href.charAt(window.location.href.length -1)
    return(
        <body style={{backgroundColor: 'darkgrey', marginBottom: 56}}>
            <ComparisonBlurb ID={ID} />
        </body> 
    )
}

export default ComparisonPage