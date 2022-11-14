import React from "react"
import { Container, Row } from "react-bootstrap"
import ResultsModule from "./ResultsModule.js"

class Results extends React.Component {

    handleChange = (e) => {
        this.setState({
            
        })
    }  

    render() {
        return (
            <Container className="results">
                <Row className="results-area">
                    <ResultsModule recipeArray={this.props.resultsDataArray}/>
                </Row>
            </Container>    
        )
    }   
}

export default Results