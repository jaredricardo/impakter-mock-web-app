import React, { Component } from 'react'
import data from '../businesses.json'
import { Form } from 'react-bootstrap'


export default class BusinessList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value:"",
            searched: ""
        }
    }

    onChange = (e) => {
        console.log(e.target.value)
        this.setState({value:e.target.value})
    } 

    onSubmit = (e) => {
        e.preventDefault()
        this.setState({
            searched: this.state.value
        })
    }

    
    render() {

        const fakeRedirect = () => {
            alert("fake redirect to external business")
        }
    
        const fakeFilterDrop= (e) => {
            e.preventDefault()
            alert('This is a fake filter popout. In here would be options to filter by business type, price range, distance, and sustainability score, among possible others.')
        }
        
        const map = data.map((business) => {
    
            const tagMap = business.businessType.map((bus) => {
                return (<li className="horizontal-li list" key={bus}> 
                            <a style={{cursor:"pointer"}} href="#"> #{bus} </a>
                        </li>)
            })
    
            const featuredSpan = (business.promoted) ? <span id="promoted">Popular!</span> : null
            const featuredClass = (business.promoted) ? "list side-card promoted" : "list side-card borderB"
    
            return (
                        <li key={business.distance} className={featuredClass}>
                            <div className="side-card">
    
                                {featuredSpan}
    
                                <h5 onClick={fakeRedirect}>
                                    {business.name}
                                </h5>
    
    
                                <span id="score">
                                    <em> 
                                        <b> 
                                                {business.score}/10 &nbsp;
                                        </b> 
                                                sustainability
                                    </em>
                                </span>
    
                                <div> 
                                    <ul className="horizontal">  
                                        {tagMap}
                                    </ul> 
                                </div>
    
                                <div className="icons-list">
                                    <ul className="horizontal">
                                        <li className="horizontal-li list icon"> <a href="#"> Comment </a>  </li>
                                        <li className="horizontal-li list icon"> <a href="#"> Favorite </a>    </li>
                                        <li className="horizontal-li list icon"> <a href="#"> Photos </a>    </li>
                                        <li className="horizontal-li list icon"> <a href="#"> Socials </a>    </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                )
            }
        )

        const resultBox = <div style={{textAlign:"center"}}> 
                            Results for: {this.state.searched}
                        </div>

        const results = this.state.searched.length > 1 ? resultBox : null

    return (
            <>
                <div className="side-nav-top-area">
            
                <Form style={{display: "inline"}} onSubmit={this.onSubmit}>
                    <Form.Group className="form-group-side-nav">
                        <Form.Control type="input" placeholder="Search..." value={this.state.value} onChange={this.onChange}/>
                    </Form.Group>
                </Form>

                <button className="btn" onClick={fakeFilterDrop}> Filters </button>
                </div>
                {results}
                <ul>
                    {map}
                </ul>
            </>
        )
    }
}
