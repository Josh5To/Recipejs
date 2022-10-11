import React from "react"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class ResultsModule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    moduleBuilder = (recipes) => {
        console.log(this.props.resultsInfo)
        console.log(recipes)
        //if we recieve an array
        if(typeof recipes == typeof []) {
            //verify recipes is filled
            if(recipes.length > 0) {
                let ingr = []
                recipes[0].recipe.ingredientLines.forEach(e => {
                    ingr.push(<ListGroup.Item>{e}</ListGroup.Item>)
                });
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{recipes[0].recipe.label}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            {ingr}
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card> 
                )

            }
        }

    }

    render() {
        return this.moduleBuilder(this.props.resultsInfo)
    }
}

export default ResultsModule