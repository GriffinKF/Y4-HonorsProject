import React from "react"
import PoliticalLeaning from "./PoliticalLeaning"
import PublicHealthSpending from "./PublicHealthSpending"
import LiteracyRate from "./LiteracyRate"
import EmploymentRate from "./EmploymentRate"
import AverageAge from "./AverageAge"
import AverageSalary from "./AverageSalary"

function ComparisonPage() {
    const ID = window.location.href.charAt(window.location.href.length -1)
    if (ID == "0") {
        var renderMe = <PoliticalLeaning ID={ID} />
    } else if (ID == "1") {
        var renderMe = <PublicHealthSpending ID={ID} />
    } else if (ID == "2") {
        var renderMe = <LiteracyRate ID={ID} />
    } else if (ID == "3") {
        var renderMe = <EmploymentRate ID={ID} />
    } else if (ID == "4") {
        var renderMe = <AverageAge ID={ID} />
    } else if (ID == "5") {
        var renderMe = <AverageSalary ID={ID} />
    } 
        
    return(
        <body style={{backgroundColor: 'darkgrey', marginBottom: 56}}>
            {renderMe}
        </body> 
    )
}

export default ComparisonPage