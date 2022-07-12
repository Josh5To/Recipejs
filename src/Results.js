import React from "react"

class Results extends React.Component {

    handleChange = (e) => {
        this.setState({
            fieldValue: e.target.value
        })
        this.props.updateField(e)
    }

    render() {
        return (
            <label>
                Ingredient:
                <input type="text" value={this.state.fieldValue} onChange={this.handleChange}></input>
            </label>
        )
    }   
}

export default Results