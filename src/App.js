import React, { Component } from 'react';
import './App.css';
import {Collapsible, CollapsibleItem} from 'react-materialize'
import Header from './components/Header' 
import Form from './components/Form' 

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />

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
                        <CollapsibleItem header='Question 1' icon='help_outline'>
                            Lorem ipsum dolor sit amet.
                        </CollapsibleItem>
                        <CollapsibleItem header='Question 2' icon='help_outline'>
                            Lorem ipsum dolor sit amet.
                        </CollapsibleItem>
                        <CollapsibleItem header='Question 3' icon='help_outline'>
                            Lorem ipsum dolor sit amet.
                        </CollapsibleItem>
                        <CollapsibleItem header='Question 4' icon='help_outline'>
                            Lorem ipsum dolor sit amet.
                        </CollapsibleItem>
                        <CollapsibleItem header='Question 5' icon='help_outline'>
                            Lorem ipsum dolor sit amet.
                        </CollapsibleItem>
                        <CollapsibleItem header='Question 6' icon='help_outline'>
                            Lorem ipsum dolor sit amet.
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
