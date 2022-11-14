import React from "react"
import { Form } from "react-bootstrap"

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
                    <Form.Control value={this.state.fieldValue} onChange={this.handleChange} style={{width: "100%"}} placeholder="Ingredients..."/>
                </label>
            </div>
        )
    }   
}

export default Field