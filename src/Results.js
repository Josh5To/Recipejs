import React from "react"
import ResultsModule from "./ResultsModule.js"

class Results extends React.Component {

    handleChange = (e) => {
        this.setState({
            
        })
    }  
    //<textarea value={this.props.otherData}></textarea>

    render() {
        return (
            <div className="results">
                <ResultsModule resultsInfo={this.props.resultsData}/>
                
            </div>
        )
    }   
}

export default Results