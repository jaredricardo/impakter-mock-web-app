import React, { Component } from 'react'
import SearchButton from './SearchButton'

export default class AboutPage extends Component {
    render() {

        const handleSearchPageChange = this.props.handleSearchPageChange

        return (
            <>
                 <div className="psuedo-nav-search-page">
                    <div className="about" onClick={() => handleSearchPageChange('searchPage')}>
                        <SearchButton className="search-page-buttons"/>
                    </div>
                </div>
            
                <div className="titles"> 
                        <p id="title-home" >
                            Sustain.<span id="current">us</span>
                        </p>
                        <p id="sub-title">
                            Connecting you with sustainable businesses
                        </p>
                </div>
    
    
                <div className="about-field">
                    <ol>
                        <li>
                            <h3>
                                Customer Segements:
                            </h3>
                            <h5>
                                Who are our customers / who are we creating value for?
                            </h5>
                            <br />
                            <p>
                                Customers are the relatively niche market of vegan, vegan leaning, 
                                vegetarian, vegetarian leaning, and generally environmentally minded 
                                individuals who desire the choice of sustainable and eco-friendly 
                                food, products, and store options over traditional. Though this is a 
                                niche market the trend for environmentally minded products and food 
                                is likely to decrease. Our most important customers are those who would 
                                be willing to always choose sustainability over easier / cheaper / less 
                                morally fulfilling options. Additionally, and importantly, our customers 
                                are also the sustainable business themselves, as they will derive more 
                                business from the exposure on our application, allowing us to generate 
                                revenue via their channel as well. 
                            </p>
                        </li>
                       
                        <li>
                            <h3>
                                Value Proposition:
                            </h3>
                            <h5>
                                What are our products and services? 
                            </h5>
                            <br />
                            <p>
                                Our service is a web / mobile app that offers ease of connection for consumers 
                                to sustainable businesses that better suit their environmentally driven purchasing
                                desires. The web app is built off the Google Maps API and offers the user a more 
                                rounded and specifically sustainable consumer experience. The alternative is often 
                                simply googling sustainable keywords (e.x. “vegan food near me”, “sustainable stores 
                                in Midtown”, “organic grocery near East Village”) in Google Maps and hoping for the 
                                best. At heart, this application is a curated hub of sustainable businesses. It acts 
                                as a tool for those who wish to practice more sustainable consumer habits 
                                and drives revenue / awareness for businesses in that sector. 
                            </p>
                            <h5>
                                What is the job we get done for our customers?
                            </h5>
                            <br />
                            <p>
                                The main job that is done is that of connection. Based on my own personal experiences 
                                when trying to navigate the modern consumer landscape, sustainable options are still 
                                rarely at the forefront, though the demand is clearly present. While the internet 
                                exists and finding exactly what you’re looking for is easier than it’s ever been, 
                                it’s still far from perfect. Our service works to strengthen our ability to practice 
                                sustainable lives. 
                            </p>
                        </li>
    
                        <li>
                            <h3>
                                Revenu Streams:
                            </h3>
                            <h5>
                                For what value are our customers really willing to pay?
                            </h5>
                            <br />
                            <p>
                                The customers, both consumer and commercial, are willing to pay for this aforementioned 
                                ease of connection. It is mutually beneficial for the business and consumers to connect. 
                                Expediting the process is invaluable for a business because they thrive on consumer spending.
                                The consumer also receives value by getting exactly what they are looking for.
                            </p>
                            <h5>
                               Possible revenue Streams:
                            </h5>
                            <br />
                                <ol>
                                    <li> Exposure payment from business</li>
                                    <li> In app advertising</li>
                                    <li> Subscription based revenue (i.e. a few dollars a month for specific deals / coupons at various sustainable businesses)</li>
                                </ol>
                                <br />
                        </li>
    
                        <li>
                            <h3>
                               Channels: 
                            </h3>
                            <h5>
                                How do we communicate with our customers? 	
                            </h5>
                            <br />
                            <p>
                                We communicate with our customers through in-app promotions and advertisements. 
                                However, this only occurs after they've been brought into the Sustain.us ecosystem 
                                through  instagram and facebook ads. Additional channels in which we recruit 
                                customers may be in person advertising (think QR code mini posters) at the business 
                                we’re promoting, as well as partnerships with the businesses themselves who can 
                                promote the service via their own social media channels. Additional channels to 
                                consider would be SEO, targeted blogs, and community building (i.e. a booth at a farmer’s
                                market). 
                            </p>
                            <h5>
                                How do we deliver our value proposition?
                            </h5>
                            <br />
                            <p>
                                We deliver our value proposition mainly via the app. Once customers have been onboarded all 
                                interaction takes place in this environment. 
                            </p>
                        </li>
    
                        <li>
                            <h3>
                                Customer Relationships:
                            </h3>
                            <h5>
                                How often will we interact with our users? 
                            </h5>
                            <br />
                            <p>
                                The goal would be to have new promotions and deals for consumers using the app every 
                                other day or so, with larger promotions and more involved activities one a month. 
                                On the “about” page there could also be an automated Q&A service. The sustain.us business
                                model is rather hands off, but with more consistent updates (say adding new businesses to 
                                the map) happening constantly in the background. 
                            </p>
                        </li>
    
                        <li>
                            <h3>
                                Key activities:
                            </h3>
                            <h5>
                                What do you do, and how often, to run the business model?
                            </h5>
                            <br />
                            <ol>
                                <li>Daily: updating the businesses in any given area | highlighting a sustainable business each day for a specific reason ( this could be moved to weekly). </li>
                                <li>Weekly: changing promotions for relevant businesses and products in given areas</li>
                                <li>Monthly: working with the businesses in any given area, setting up promotions in physical spaces. </li>
                            </ol>
                            <br/ >
                        </li>
    
                        <li>
                            <h3>
                                Key Resources:
                            </h3>
                            <h5>
                                Who are the people, knowledge, means, and money you need to run the business?
                            </h5>
                            <br />
                            <ol>
                                <li>People: developers, sustainably minded individuals /businesses, designers, technical writers </li>
                                <li>Means: startup capital, web servers</li>
                                <li>Knowledge: of local areas and their sustainable products, businesses, events, etc </li>
                            </ol>
                            <br/ >
                        </li>
    
                        <li>
                            <h3>
                                Key Partners: 
                            </h3>
                            <h5>
                                Who are the partners we CANNOt do this business without? 
                            </h5>
                            <br />
                            <ol>
                                <li>All sustainable businesses in a given area, especially those who  we would work with to promote and generate revenue through customer traffic. </li>
                                <li>Web hosting partner for large user traffic  </li>
                                <li>Google API -- without this the business would fall apart / is not possible </li>
                            </ol>
                            <br />
                        </li>
    
                        <li>
                            <h3>
                               Cost Structure: 
                            </h3>
                            <h5>
                                What are the main costs and what is the relative breakdown? 
                            </h5>
                            <br />
                            <p>
                                Initial startup cost could be done with relatively low investment. 
                                At first the application could be local only (say NYC, LA, Seattle), 
                                which would cut down on costs exponentially. The main cost of operating 
                                at this time would likely come from sourcing the hundreds if not 
                                thousands of sustainable businesses and properly integrating them into 
                                our app. This would be a large and time consuming undertaking in any 
                                metropolitan area and would require a number of people to research and 
                                write the material. The subsequent largest cost would be business related 
                                employees “on the ground” interacting with the various sustainable businesses 
                                and setting up  promotions.
                            </p>
                        </li>
                    </ol>
                </div>
            </>
        )
    }
}
