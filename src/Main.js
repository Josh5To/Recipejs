import React from "react"
import Recipes from "./Recipes"
import Results from "./results/ResultsArea.js"
import SearchForm from "./search/SearchForm"

const UserInfo = React.createContext('test')

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ResultsObj: Array
        }
    }

    getQueryResults = (query) => {
        this.updateResultsState(query).then(res => {
                this.setState({
                    ResultsObj: res.hits
                })
        })
    }

    updateResultsState = async (query) => {
        let recipe = new Recipes()
        var recipeResults
        try {
            recipeResults = await recipe.callQuery(query)
        } catch (error) {
            console.log("Problem calling API:");
            console.error(error);
        }
        return recipeResults
    }

    render() {
        const recipeArray = this.state.ResultsObj
        
        return (
            <UserInfo.Provider value="nice">
                <SearchForm getQueryResults={this.getQueryResults}/>
                <Results resultsDataArray={recipeArray}/>    
            </UserInfo.Provider>
        )

    }
}

export default Main