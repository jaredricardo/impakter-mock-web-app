import React, { PureComponent } from 'react'
import SearchBar from './SearchBar'
import About from './About'
import SignIn from './SignIn'
import MapBody from './MapBody'
import BusinessList from './BusinessList'


export default class MapPage extends PureComponent {
    constructor(props) {
    super(props)

        this.state = {
            currentSearch: ""
        }
    }


    passSubmit = (passed) => {
        this.setState({currentSearch:passed})
    }

    passNavSubmit = (passed) => {
        console.log(passed)
        this.setState({currentSearch:passed})
    }
    
    
    render() {

        const handleAboutPageChange = this.props.handleAboutPageChange
        const handleSignInPageChange = this.props.handleSignInPageChange
        const areResults = <p>results for: "{this.state.currentSearch}"</p>

        const results = this.state.currentSearch.length > 1 ? areResults : null

        return (
            <>
                <div className="psuedo-nav-map-page">
            
                    <div className="map-page-title-button-container">

                    <h1 id="title-searched">
                        Sustain.<span id="current">us</span>
                    </h1>
                        <div className="map-page-button-container"> 
                            <div onClick={() => handleAboutPageChange('aboutPage')} style={{display:"inline"}}>
                                <About />
                            </div>
                            <div onClick={() => handleSignInPageChange('loginPage')} style={{display:"inline"}}>
                                <SignIn/>
                            </div>
                        </div>
                    </div>

                    <div className="search-bar-map-page">
                        <SearchBar passSubmit={this.passSubmit}/>    
                    </div>  

                    <div className="results-text-box">
                        {results}
                    </div>               
                </div>
                
                <div className="google-map"> 
                    <MapBody />
                </div>
            </>
        )
    }
}
