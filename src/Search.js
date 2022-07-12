import React from "react"

class Search extends React.Component {
    handleClick = () => {
        this.props.submitForm()
    }
    render() {
        return <button onClick={this.handleClick}>Click!</button>
    }   
}

export default Search