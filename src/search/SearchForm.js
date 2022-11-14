import Field from './Field'
import React from "react"
import Search from './SearchButton.js'

import { Col,Row, Stack } from "react-bootstrap"
const UserInfo = React.createContext('test')

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            _fieldValue: '',
            returnValue: '',

            ResultsObj: Array
        }

    }

    _submitForm = () => {
        this.props.getQueryResults(this.state._fieldValue)
    }

    _updateField = (e) => {
        this.setState({
            _fieldValue: e.target.value
        })
    }


    render() {
        return (
            <UserInfo.Provider value="nice">
                <Row className="search-area justify-content-center">
                    <Col sm={6} md={6}>
                        <Stack direction="horizontal" gap={3} className="justify-content-center">
                            <Field updateField={this._updateField}/>
                            <Search submitForm={this._submitForm}/>    
                        </Stack>  
                    </Col>
                </Row>
            </UserInfo.Provider>
        )
    }
}

export default SearchForm