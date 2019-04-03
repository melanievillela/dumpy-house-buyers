//Initiate collapsible FAQ items
document.addEventListener('DOMContentLoaded', function() {
    let collapsible = document.querySelectorAll('.collapsible');
    let instanceC = M.Collapsible.init(collapsible);

    let navbar = document.querySelectorAll('.sidenav');
    let instancesN = M.Sidenav.init(navbar);
});

//Scroll to sections on NAV
const processLink = document.querySelector("#process-link");
const faqLink = document.querySelector("#faq-link");
const contactLink = document.querySelector("#contact-link");
const processLinkMobile = document.querySelector("#process-link-m");
const faqLinkMobile = document.querySelector("#faq-link-m");
const contactLinkMobile = document.querySelector("#contact-link-m");
const process = document.querySelector("#process");
const faq = document.querySelector("#faq");
const contact = document.querySelector("#contact");
const navHeight = document.querySelector(".navbar-fixed").clientHeight;

processLink.addEventListener("click", function() {
    process.scrollIntoView();
    window.scrollBy(0, -navHeight);
});

processLinkMobile.addEventListener("click", function() {
    process.scrollIntoView();
    window.scrollBy(0, -navHeight);

});

faqLink.addEventListener("click", function() {
    faq.scrollIntoView();
    window.scrollBy(0, -navHeight);
});

faqLinkMobile.addEventListener("click", function() {
    faq.scrollIntoView();
    window.scrollBy(0, -navHeight);

});

contactLink.addEventListener("click", function() {
    contact.scrollIntoView();
    window.scrollBy(0, -navHeight);
});

contactLinkMobile.addEventListener("click", function() {
    contact.scrollIntoView();
    window.scrollBy(0, -navHeight);
});