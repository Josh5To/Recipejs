import React from "react"
import Search from './Search.js'
import Field from './Field'
import Recipes from './Recipes'
import Results from "./Results.js"
const UserInfo = React.createContext('test')

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            _fieldValue: '',
            ResultsObj: Array,
            returnValue: ''
        }

    }

   _submitForm = (e) => {
        let recipe = new Recipes()
        this.updateResultsState(recipe).then(res => {
                this.setState({
                    ResultsObj: res.hits
                })
        })
    }

    _updateField = (e) => {
        this.setState({
            _fieldValue: e.target.value
        })
    }

    updateResultsState = async (recipeObject) => {
        var recipeResults
        try {
            recipeResults = await recipeObject.callQuery(this.state._fieldValue)
        } catch (error) {
            console.log("Problem calling API:");
            console.error(error);
        }
        return recipeResults
    }

    render() {
        const returnValue = this.state.returnValue
        const recipeArray = this.state.ResultsObj
        
        return (
            <UserInfo.Provider value="nice">
                <main className="main">
                    <div className="search-area">
                        <Field updateField={this._updateField}/>
                        <Search submitForm={this._submitForm}/>
                    </div>
                    <Results resultsData={recipeArray} otherData={returnValue}/>        
                </main>
            </UserInfo.Provider>
        )

    }
}

export default Form