import React, { Component } from 'react'
import SearchBar from './SearchBar'
import About from './About'
import SignIn from './SignIn'

export default class SearchPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             currentTitle: "us",
             currentSearch: null
        }
    }

    componentDidMount() {

        const usOptions = ["the world","the environement", "the oceans", "the forests", "ourselves"]

        function getNewOption(current) {
            const randomOption = Math.floor(Math.random() * usOptions.length)
            const newer = usOptions[randomOption]
            if(current === newer) {
              return getNewOption(current)
            } else {
                return newer
            }
        }

        let count = 0

        setTimeout(() => {

            let randomTime = Math.random() * 2500 + 1500

            const interval = setInterval(() => {
                    count++
                    randomTime = Math.random() * 2500 + 1500
                 if(count > 5) {
                    this.setState({currentTitle:"us"})
                    clearInterval(interval)
                } else {
                    this.setState({
                        currentTitle: getNewOption(this.state.current)
                    })
                }
            }, randomTime);
        }, 4000)
    }

    passSubmit = (passed) => {
        this.setState({currentSearch:passed})
        console.log(passed)
    }
    
    render() {

        const handleAboutPageChange = this.props.handleAboutPageChange
        const handleSignInPageChange = this.props.handleSignInPageChange
        const handleMapPageChange = this.props.handleAboutPageChange 
        
        return (
            <>
                <div className="psuedo-nav-search-page">
                    <div className="about" onClick={() => handleAboutPageChange('aboutPage')}>
                        <About className="search-page-buttons"/>
                    </div>
                    <div className="sign-in" onClick={() => handleSignInPageChange('loginPage')}>
                        <SignIn className="search-page-buttons"/>    
                    </div>
                </div>


                <div className="search-box-center" > 
                    <div>
                        <div className="titles"> 
                            <p id="title-home" >
                                Sustain.<span id="current">{this.state.currentTitle}</span>
                            </p>
                            <p id="sub-title">
                                Connecting you with sustainable businesses
                            </p>
                        </div>
                        <div onSubmit={() => handleMapPageChange('mapPage')}>
                            <SearchBar passSubmit={this.passSubmit}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

