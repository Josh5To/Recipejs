import React from "react"

class Field extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fieldValue: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            fieldValue: e.target.value
        })
        this.props.updateField(e)
    }

    render() {
        return (
            <div className="search-field">
                <label style={{textAlign: "center"}}>
                    Ingredient:
                    <input type="text" value={this.state.fieldValue} onChange={this.handleChange} style={{width: "100%"}}></input>
                </label>
            </div>
        )
    }   
}

export default Field