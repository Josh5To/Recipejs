import React from "react"
import { Button } from "react-bootstrap"

class Search extends React.Component {
    handleClick = () => {
        this.props.submitForm()
    }
    render() {
        return <Button variant="outline-dark" onClick={this.handleClick}>Click!</Button>
        //return <button onClick={this.handleClick}>Click!</button>
    }   
}

export default Search