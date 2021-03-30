import React, { Component } from 'react'
import MapPage from './MapPage'
import SearchPage from './SearchPage'
import AboutPage from './AboutPage'
import LoginPage from './LoginPage'


export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: "searchPage"
        }
    }

    handleAboutPageChange = (passed) => {
        this.setState({currentPage:passed})
    }

    handleSignInPageChange = (passed) => {
        this.setState({currentPage:passed})
    }

    handleSearchPageChange = (passed) => {
        this.setState({currentPage:passed})
    }

    // handleMapPageChange = (passed) => {
    //     this.setState({currentPage: passed})
    // }
    
    
    render() {



        const pages = {
            'searchPage': <SearchPage   handleAboutPageChange={this.handleAboutPageChange} 
                                        handleSignInPageChange={this.handleSignInPageChange}
                                        />,

            'mapPage': <MapPage         handleAboutPageChange={this.handleAboutPageChange} 
                                        handleSignInPageChange={this.handleSignInPageChange}/>,

            'aboutPage': <AboutPage     handleSearchPageChange={this.handleSearchPageChange}/>,

            'loginPage': <LoginPage     handleAboutPageChange={this.handleAboutPageChange}
                                        handleSearchPageChange={this.handleSearchPageChange}/>
        }

        const PageDisplay = pages[this.state.currentPage]

        return (
            <div className="display">
                {PageDisplay}
            </div>
        )
    }
}
