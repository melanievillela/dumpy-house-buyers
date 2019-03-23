import React, { Component } from 'react';
import {Button, Input, Row} from 'react-materialize'

class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: "",
        mailSenet: false,
        error: null
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    }    

  	render() {
		return (
            <Row className="flex column address-form" action="http://formspree.io/melaniemedel@att.net" method="POST">
                <Input s={12} label="First Name" name="firstName" value={this.state.firstName} onChange={(e) => this.setState({firstName: e.target.value})}/>
                <Input s={12} label="Last Name" name="lastName" value={this.state.lastName} onChange={(e) => this.setState({lastName: e.target.value})}/>
                <Input s={12} label="Address" name="address" value={this.state.address} onChange={(e) => this.setState({address: e.target.value})}/>
                <Input s={12} label="City" name="city" value={this.state.city} onChange={(e) => this.setState({city: e.target.value})}/>
                <Input s={12} label="State" name="state" value={this.state.state} onChange={(e) => this.setState({state: e.target.value})}/>
                <Input s={12} label="Zip" name="zip" value={this.state.zip} onChange={(e) => this.setState({zip: e.target.value})}/>
                <Input s={12} label="Phone" name="phone" value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})}/>
                <Input s={12} label="Email" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                <br />
                <Button className="light-blue accent-3" waves='light' onClick={(e) => this.handleFormSubmit(e)}>Submit</Button>
            </Row> 
		)
  	}
}

export default Form;