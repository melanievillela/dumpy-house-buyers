import React, { Component } from 'react';
import './App.css';
import {Collapsible, CollapsibleItem} from 'react-materialize'
import Header from './components/Header' 
import Form from './components/Form' 

class App extends Component {

    //Stop the 2nd li from automatically being open.
    componentDidMount() {
        const li = document.querySelector(".collapsible").children[1];
        console.log(li)
        if (li.classList.contains("active")) {
            li.classList.remove("active");
            li.firstElementChild.classList.remove("active");
        }
    }

    render() {
        return (
            <div className="App">
                <Header />

                <section>
                    <h5><strong>"I need to sell my house FAST!"</strong></h5>
                    <p>
                    We hear that a lot at Dumpy House Buyers. We buy houses every day for cash, and we’ll buy yours too, no matter what condition it’s in. 
                    We buy houses, condos, multi-tenant buildings, duplexes, townhouses, and occasionally commercial property. The one thing we typically look for 
                    when we buy houses is homeowners who would like to sell their home in “as is” condition quickly for a cash buyout.
                    </p>
                    <h5><strong>When you need to sell your house fast, sell to us!</strong></h5>
                    <p>
                    Sell us your dumpy house. It doesn’t matter what type of ugly home you have, Dumpy House Buyers would like to make a no obligation cash offer to 
                    purchase your home for cash. Whether your home is cosmetically ugly, has ugly structural or repair issues, or has you captive in an ugly situation, 
                    you can count on Dumpy House Buyers to come to your rescue with a fast and fair cash offer.
                    </p>
                    <h5><strong>We Love Ugly Houses!</strong></h5>
                    <p>
                    We buy ugly houses at Dumpy House Buyers mostly because we’re home buyers who like to help. You never have to worry about the condition of your home. 
                    We’ll buy your home in as is condition, pay cash, and will close fast, regardless of your home’s problems.
                    You’re never obligated to sell your home to Dumpy House Buyers just for making an offer, and we don’t charge any fees, ever. Our process is simple and won’t cost you a thing.
                    </p>                    
                </section>

                <section className="flex column" id="process">
                    <h2>The Process</h2>
                    <div className="flex process-items">
                        <div className="flex column process-item">
                            <h5>Email</h5>
                            <p>Fill out the form and send us your address.</p>
                            <i className="material-icons large">email</i>
                        </div>
                        <div className="flex column process-item">
                            <h5>Schedule</h5>
                            <p>We come out for a free, no obligation consultation.</p>
                            <i className="material-icons large">calendar_today</i>
                        </div>
                        <div className="flex column process-item">
                            <h5>Offer</h5>
                            <p>We give you a cash offer and close when you're ready.</p>
                            <i className="material-icons large">assignment</i>
                        </div>
                        <div className="flex column process-item">
                            <h5>Cash</h5>
                            <p>We pay you cash for your house and you do the happy dance.</p>
                            <i className="material-icons large">monetization_on</i>
                        </div>
                    </div>
                </section> 

                <section id="faq">
                    <h2>FAQ</h2>
                    <Collapsible accordion defaultActiveKey={1}>
                        <CollapsibleItem 
                            header="Who usually sells their house to Dumpy House Buyers?" icon='help_outline'>
                            Great question. Actually, that’s one of the most frequently asked questions we get here at Dumpy House Buyers, 
                            and the answer is simple. Homeowners from all walks of life sell houses to Dumpy House Buyers for a number of reasons, 
                            including:
                            <ul className="faq-list">
                                <li>
                                Relocating to another city or state.
                                </li>
                                <li>
                                Facing foreclosure because of delinquent mortgage payments.
                                </li>
                                <li>
                                Needing to liquidate assets due to divorce, medical bills, or other cash need.
                                </li>
                                <li>
                                Wanting to sell a property inheritance quickly.
                                </li>
                                <li>
                                Not having the money or desire to make necessary home repairs.
                                </li>
                                <li>
                                Getting rid of problematic rental property.
                                </li>
                            </ul>
                        </CollapsibleItem>
                        <CollapsibleItem 
                            header="What is a dumpy house?" icon='help_outline'>
                            Our definition of dumpy includes homes that are cosmetically ugly, homes with serious repair or structural issues, 
                            and homes that keep homeowners captive in an ugly situation. Another of our frequently asked questions that fits in 
                            with the answer to this question is: “What makes a situation ugly?” This typically includes:
                            <ul className="faq-list">
                                <li>
                                Houses in undesirable areas or in high crime neighborhoods.
                                </li>
                                <li>
                                Houses in areas prone to storm damage, such as homes in flood plains.
                                </li>
                                <li>
                                Houses that are no longer convenient for homeowners, such as with a long commute to a new job.
                                </li>
                                <li>
                                Houses with bad memories for a homeowner, such as death, tragic experience, or divorce.
                                </li>
                                <li>
                                Houses with negative mortgage financing terms or high interest rates.
                                </li>
                                <li>
                                Houses with high payments or upside down mortgage balances.
                                </li>
                                <li>
                                Houses that cause any other type of disadvantage to a homeowner.
                                </li>
                            </ul>
                        </CollapsibleItem>
                        <CollapsibleItem 
                            header="How does the process work when selling your home to Dumpy House Buyers?" icon='help_outline'>
                            If you’re interested in selling your home to Dumpy House Buyers, the steps listed below will put your mind at ease. 
                            Here’s the home buying process:
                            <ul className="faq-list">
                                <li>
                                Call us at (123) 456-7890 or fill out our contact form to give us some simple information about your home.
                                </li>
                                <li>
                                We’ll contact you immediately to schedule a visit to your home.
                                </li>
                                <li>
                                We will visit your home in person, explain the process of selling your home, answer all of your questions, and evaluate 
                                your home’s condition, before making a fair, no-obligation offer to purchase your home for cash. Accepting our cash offer is 
                                all up to you.
                                </li>
                                <li>
                                If you accept the offer, we’ll set up a closing usually within 30 days. We’ll pay cash for your home, pay all normal 
                                closing costs and you’ll get out of your dumpy home fast. That’s the entire process.
                                </li>
                            </ul>
                        </CollapsibleItem>
                        <CollapsibleItem 
                            header="Can I expect a market value offer for my home?" icon='help_outline'>
                            When selling your home, we will consider the condition of your home, and will make a fair offer to pay cash. In determining 
                            the offer, we will discount from the estimated retail value after it’s fully renovated. This means we will buy your home, but 
                            at a price that is below market value due to necessary repairs, renovation and other factors. We buy homes for cash, renovate 
                            them, and resell them for a profit or rent them out to qualified tenants.
                            <br />
                            However, you will enjoy the conveniences of an all cash closing when selling your home to Dumpy House Buyers. You won’t have to 
                            deal with any mortgage approval hassles, you won’t have to pay any normal closing costs, and you don’t have to make repairs to your 
                            home. Close in 30 days of receiving an offer for cash, and you’re out of your dumpy house.
                        </CollapsibleItem>
                        <CollapsibleItem 
                            header="How do you determine the price you will offer for my house?" icon='help_outline'>
                            Dumpy House Buyers take a number of factors into consideration when determining a cash offer. After visiting your home and going over 
                            our frequently asked questions and any additional questions you may have, our representative will evaluate:
                            <ul className="faq-list">
                                <li>
                                The existing condition of your home.
                                </li>
                                <li>
                                The extent and cost of repairs needed to resell your home.
                                </li>
                                <li>
                                The time it will take to finish needed repairs.
                                </li>
                                <li>
                                The value of your home compared to other comparable homes in the area.
                                </li>
                                <li>
                                The real estate commission required to resell your home.
                                </li>                                
                                <li>
                                The costs associated with maintaining your home during repairs, including taxes, payments, insurance, utilities, homeowner dues, and more.
                                </li>
                            </ul>
                        </CollapsibleItem>
                        <CollapsibleItem 
                            header="Does Dumpy House Buyers buy condos and townhomes too?" icon='help_outline'>
                            Yes, this is a great frequently asked questions because many people think our we only buy single family homes. We buy single family homes, 
                            duplexes, multi-tenant buildings, townhomes, condos, apartments, and occasionally some commercial properties.
                        </CollapsibleItem>
                        <CollapsibleItem 
                            header="Does Dumpy House Buyers buy mobile homes?" icon='help_outline'>
                            No. If you’re selling your home and it’s a mobile or manufactured home, Dumpy House Buyers will be unable to make an offer. This is regardless of 
                            whether it’s on a fixed foundation or tied down.
                        </CollapsibleItem>
                        <CollapsibleItem 
                            header="Do I have to pay a fee for Dumpy House Buyers to make an offer on my home?" icon='help_outline'>
                            No. You never have to pay anything for Dumpy House Buyers to make an offer when you’re interested in selling your home for cash. We will 
                            schedule a visit at a time that’s convenient for you, answer your questions, evaluate your home, and make an all cash offer with no obligation, 
                            and at no cost to you.
                        </CollapsibleItem>
                        <CollapsibleItem 
                            header="Do I have to sell to Dumpy House Buyers if I contact you for a cash offer?" icon='help_outline'>
                            No. You’re never obligated to sell to Dumpy House Buyers when we submit an offer. You can choose to accept our cash offer, or you can choose not to. 
                            The decision is all up to you and the offer is with no obligation and no cost to you.
                        </CollapsibleItem>
                    </Collapsible>
                </section> 

                <section id="contact">
                    <h2>Contact Us</h2>
                    <h5>Fill out the form below for a free, no obligation consultation and get your cash offer today!</h5>
                    <Form />
                </section>
     
            </div>
    );
  }
}

export default App;
