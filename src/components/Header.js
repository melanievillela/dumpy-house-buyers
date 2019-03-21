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
                    <Navbar className="navbar light-blue accent-3 pb-2" brand="Dumpy House Buyers" left href="#">
                        <NavItem id="phone-container" href="#"><i className="material-icons" id="phone">phone</i><p>123-456-7890</p></NavItem>					
                        <NavItem onClick={this.scrollToProcess}>The Process</NavItem>
                        <NavItem onClick={this.scrollToFAQ}>FAQ</NavItem>
                        <NavItem onClick={this.scrollToContact}>Contact Us</NavItem>
                    </Navbar>	
                </div>
                <div id="header-image">
                    <div className="flex" id="hero-container">
                        <div className="flex column" id="hero-message">
                            <h2 className="white-text">Get CASH for your house today.</h2>
                            <div className="flex">
                                <div className="flex column hero-items">
                                    <h4 className="white-text flex"><i className="material-icons small no">block</i>No dealing with realtors.</h4> 
                                    <h4 className="white-text flex"><i className="material-icons small no">block</i>No paying for expensive repairs.</h4>   
                                    <h4 className="white-text flex"><i className="material-icons small no">block</i>No back and forth with banks.</h4> 
                                </div>
                                <div className="flex column hero-items">
                                    <h4 className="white-text flex"><i className="material-icons small yes">check</i>We pay your closing costs.</h4>     
                                    <h4 className="white-text flex"><i className="material-icons small yes">check</i>We can close quickly.</h4>
                                    <h4 className="white-text flex"><i className="material-icons small yes">check</i>We pay CASH.</h4>
                                </div>
                            </div>
                        </div>
                    </div>                        
                </div>			
			</div>
		)
  	}
}

export default Header;