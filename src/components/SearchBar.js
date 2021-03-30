import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: ''
        }
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.value < 1) return
    }
  
    
    render() {

        const passSubmit = this.props.passSubmit
        const value = this.state.value
        
        return (
            <div onSubmit = {() => passSubmit(value)}>
                <Form className="search-box" onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Control type="input" placeholder="Search for anything...we'll do the rest" onChange={this.handleChange} value={this.state.value}/>
                    </Form.Group>
                </Form>
            </div>
           
        )
    }
}
