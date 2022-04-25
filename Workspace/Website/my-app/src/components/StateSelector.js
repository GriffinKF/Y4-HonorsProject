import React, { useState } from "react"
import { CardGroup, Container } from "react-bootstrap"
import Select from "react-select"
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const options = [
    { value: '0', label: 'Alabama' },
    { value: '1', label: 'Alaska' },
    { value: '2', label: 'Arizona' },
    { value: '3', label: 'Arkansas' },
    { value: '4', label: 'California' },
    { value: '5', label: 'Colorado' },
    { value: '6', label: 'Connecticut' },
    { value: '7', label: 'Delaware' },
    { value: '8', label: 'Florida' },
    { value: '9', label: 'Georgia' },
    { value: '10', label: 'Hawaii' },
    { value: '11', label: 'Idaho' },
    { value: '12', label: 'Illinois' },
    { value: '13', label: 'Indiana' },
    { value: '14', label: 'Iowa' },
    { value: '15', label: 'Kansas' },
    { value: '16', label: 'Kentucky' },
    { value: '17', label: 'Louisiana' },
    { value: '18', label: 'Maine' },
    { value: '19', label: 'Maryland' },
    { value: '20', label: 'Massachusetts' },
    { value: '21', label: 'Michigan' },
    { value: '22', label: 'Minnesota' },
    { value: '23', label: 'Mississippi' },
    { value: '24', label: 'Missouri' },
    { value: '25', label: 'Montana' },
    { value: '26', label: 'Nebraska' },
    { value: '27', label: 'Nevada' },
    { value: '28', label: 'New Hampshire' },
    { value: '29', label: 'New Jersey' },
    { value: '30', label: 'New Mexico' },
    { value: '31', label: 'New York' },
    { value: '32', label: 'North Carolina' },
    { value: '33', label: 'North Dakota' },
    { value: '34', label: 'Ohio' },
    { value: '35', label: 'Oklahoma' },
    { value: '36', label: 'Oregon' },
    { value: '37', label: 'Pennsylvania' },
    { value: '38', label: 'Rhode Island' },
    { value: '39', label: 'South Carolina' },
    { value: '40', label: 'South Dakota' },
    { value: '41', label: 'Tennessee' },
    { value: '42', label: 'Texas' },
    { value: '43', label: 'Utah' },
    { value: '44', label: 'Vermont' },
    { value: '45', label: 'Virginia' },
    { value: '46', label: 'Washington' },
    { value: '47', label: 'West Virginia' },
    { value: '48', label: 'Wisconsin' },
    { value: '49', label: 'Wyoming' },   
    { value: '50', label: null }, 
  ]


function StateSelector() {
    const [selectedValue, setSelectedValue] = useState(50)
    const handleChange = e => {setSelectedValue(e.value)}
    if (options[selectedValue].label == null) {
        var buttonLabel = "Please Select A State"
    } else {
        var buttonLabel = `View Data For: ${options[selectedValue].label}`
        var selectedState = parseInt(selectedValue) + parseInt(100)
        selectedState = '/' + selectedState
    }
    return(
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title style={{textAlign:"center"}}>
                        View Data For Individual States
                    </Card.Title>
                </Card.Body>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <p>
                                The comparisons provided with other statistics above are just some that I thought may be interesting
                            </p>
                            <p>
                                However, the use of the data is not limited at that. Feel free to use the dropdown menu on the right hand side to explore the "raw" data for individual states for yourself!
                            </p>
                            <p>
                                Disclaimer: Raw state data includes the text and content of the analyzed tweets themselves - these tweets have not been censored in any way, and some may not be appropriate.
                            </p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Select
                                value={options.find(obj => obj.value === selectedValue)}
                                maxMenuHeight={180}
                                options={options}
                                onChange={handleChange}
                            />
                            <div style={{height: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', gridTemplateRows: 'auto 1fr'}}>
                                {options[selectedValue].label ? (<Link to={selectedState}><Button variant="primary">{buttonLabel}</Button></Link>) : (<div />)}
                            </div>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Card>
        </Container>
    )
}

export default StateSelector