import React, { Component } from 'react'
import BusinessList from './BusinessList'

export default class MapBody extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open: false
        }
    }

    changeView = (e) => {
       
        this.setState({
            open: !this.state.open
        })
    }

    render() {



        const side = <div className="side-nav">
                            <BusinessList />
                     </div>


        const showingCondition = (this.state.open) ? side : null
        const buttonTextCondition = (this.state.open) ? "Show Map View : )" : "Show List View : )"
       

        return (
    
            <div className="map-container"> 
                {showingCondition}
                <button className="btn" id="nav-btn" onClick={this.changeView}> {buttonTextCondition} </button>
            </div>
        )
    }
}
