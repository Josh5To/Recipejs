import React from "react"
import Search from './Search.js'
import Field from './Field'
import Recipes from './Recipes'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            _fieldValue: '',
            returnValue: ''
        }
    }

    getData = () => {
        var rec = new Recipes()
        console.log(rec.callQuery())
    }

    _submitForm = (e) => {
        var rec = new Recipes()
        
        console.log(this.state._fieldValue)
        console.log(rec.callQuery())
    }

    _updateField = (e) => {
        this.setState({
            _fieldValue: e.target.value
        })
    }

    render() {
        return (
            <>
                <Field updateField={this._updateField}/>
                <Search submitForm={this._submitForm}/>
                <textarea value={this.state.returnValue}></textarea>
            </>
        )

    }
}

export default Form