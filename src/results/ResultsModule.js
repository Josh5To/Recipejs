import React from "react"
import ResultsCard from "./ResultsCard"

class ResultsModule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    moduleBuilder = (recipes) => {
        //if we recieve an array
        if(typeof recipes == typeof []) {
            //verify recipes is filled
            if(recipes.length > 0) {
                console.log(recipes)
                let recipeResults = recipes.map((rec) => 
                    <ResultsCard recipeData={rec}/>
                )
                return recipeResults
            }
        }

    }

    render() {
        return this.moduleBuilder(this.props.recipeArray)
    }
}

export default ResultsModule