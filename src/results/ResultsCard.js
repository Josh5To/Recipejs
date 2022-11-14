import React from "react"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class ResultsCard extends React.Component {
    cardBuilder = (recipe) => {
    
        let ingr = []
        recipe.recipe.ingredientLines.forEach(e => {
            ingr.push(<ListGroup.Item>{e}</ListGroup.Item>)
        });
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{recipe.recipe.label}</Card.Title>
                    <Card.Text>
                    {`\nCalories ${recipe.recipe.calories.toFixed(2)}\n`}
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

    render() {
        return(
            this.cardBuilder(this.props.recipeData)
        )
    }
}



export default ResultsCard