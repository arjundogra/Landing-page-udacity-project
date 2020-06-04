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
function buildNav(){
    for (i=1; i<=4;i++){
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
}

buildNav();    

// Add class 'active' to section when near top of viewport
function active(){
	for (var i = 1; i <= 4; i++) {
		var section = document.querySelector('#section'+i);
		const box = section.getBoundingClientRect();
		console.log(box);
		if (box.top <= 150 && box.bottom >= 150) {
        section.classList.add('your-active-class');
        section.style.border = "2px solid blue";
        } 
        else{
        	section.classList.remove('your-active-class');
        	section.style.border = "";
        }
    }
}

document.addEventListener('scroll',function(){
	active();
});

// Scroll to anchor ID
const allAnchor = document.querySelectorAll("a");
allAnchor.forEach(item => {
	item.addEventListener("click", function(){
	const moveTo = this.hash;
    $('html').animate({
        scrollTop: $(moveTo).position().top
    });
	})
});	
	

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


