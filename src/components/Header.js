import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'

class Header extends Component {

    newMediaQuery = () => {
        window.addEventListener("resize", () => {
            const mobileNav = document.querySelector(".brand-logo").nextElementSibling;
            const mobileButton = document.querySelector(".button-collapse");

            if (window.screen.width <= 992) {
                mobileNav.classList.add("hide-on-small-and-down");
                mobileNav.classList.remove("hide-on-med-and-down");
                mobileButton.classList.add("hide-on-med-and-up");
            }

            if (window.screen.width <= 700) {
                mobileNav.classList.remove("hide-on-small-and-down");
                mobileNav.classList.add("hide-on-med-and-down");
                mobileButton.classList.remove("hide-on-med-and-up");
            }
        });


    }
   
	scrollToProcess = () => {
        const navHeight = document.querySelector(".navbar-fixed").clientHeight;
        document.querySelector("#process").scrollIntoView();
        
		window.scrollBy(0, -navHeight);
    }

    scrollToFAQ = () => {
		const navHeight = document.querySelector(".nav-wrapper").clientHeight;
		document.querySelector("#faq").scrollIntoView();
		window.scrollBy(0, -navHeight);
    }
 

	scrollToContact = () => {
		const navHeight = document.querySelector(".nav-wrapper").clientHeight;
		document.querySelector("#contact").scrollIntoView();
		window.scrollBy(0, -navHeight);
    }


  	render() {
          this.newMediaQuery();

		return (
			<div id="header">
                <div className="navbar-fixed">
                    <Navbar className="navbar light-blue accent-3 pb-2" brand="Dumpy House Buyers" left>
                        <NavItem id="phone-container" href="#"><i className="material-icons" id="phone">phone</i><p>123-456-7890</p></NavItem>					
                        <NavItem onClick={this.scrollToProcess}>The Process</NavItem>
                        <NavItem onClick={this.scrollToFAQ}>FAQ</NavItem>
                        <NavItem onClick={this.scrollToContact}>Contact Us</NavItem>
                    </Navbar>	
                </div>
                <div id="header-image">
                    <div className="flex" id="hero-container">
                        <div className="flex column" id="hero-message">
                            <h2 className="white-text">Get cash for your house.</h2>
                            <h4 className="white-text">We will buy your house "AS IS" and close when you want. <br />You won’t have to clean, paint or fix anything.</h4>                            
                        </div>
                    </div>                        
                </div>			
			</div>
		)
  	}
}

export default Header;