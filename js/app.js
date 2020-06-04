/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (i=1; i<=3;i++){
    const list = document.createElement("li");
    const anchor = document.createElement("a");
    const text = document.createTextNode("Section" + i);
    anchor.className = "menu__link";
    anchor.appendChild(text);
    anchor.setAttribute('href', `#section`+i)
    list.appendChild(anchor);
    const navbar = document.querySelector("#navbar__list");
    navbar.appendChild(list);
}
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
document.querySelector("a").addEventListener("click", function(e){
	console.log(this.hash);
	});
	

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


