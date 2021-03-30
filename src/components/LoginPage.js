import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import About from './About'
import SearchButton from './SearchButton'


export default class LoginPage extends Component {
    render() {
        
        const handleSubmit = (e) => {
            e.preventDefault()
            return alert("Fake login redirect")
        }

        const handleAboutPageChange = this.props.handleAboutPageChange
        const handleSearchPageChange = this.props.handleSearchPageChange

        return (
            <>
                <div className="psuedo-nav-search-page">
                    <div className="about" onClick={() => handleAboutPageChange('aboutPage')}>
                        <About className="search-page-buttons"/>
                    </div>
                    <div className="sign-in" onClick={() => handleSearchPageChange('searchPage')}>
                        <SearchButton className="search-page-buttons"/>
                    </div>
                </div>

    
                <div className="login-box-center" > 
                    <div>
                        <div className="titles"> 
                            <p id="title-home" >
                                Sustain.<span id="current">us</span>
                            </p>
                            <p id="sub-title">
                                Connecting you with sustainable businesses
                            </p>
                        </div>
                        
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>User Name or email</Form.Label>
                                <Form.Control placeholder="Enter user or email" />
                            </Form.Group>
    
                            <Form.Group >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button id="login-btn" type="submit">
                                Log in
                            </Button>
                        </Form>
                    </div>
                </div>
            </>
        )
    }
}

