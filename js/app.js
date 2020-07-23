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

// build the nav
function buildNav(){
    for (i=1; i<=4;i++){
        const list = document.createElement("li");
        const anchor = document.createElement("a");
        const text = document.createTextNode("Section" + i);
        anchor.className = `menu__link section${i}`;
        anchor.appendChild(text);
        anchor.setAttribute('href', `#section`+i)
        list.appendChild(anchor);
        const navbar = document.querySelector("#navbar__list");
        navbar.appendChild(list);
    }
}

buildNav();  

// Scroll To the section
document.querySelectorAll('.navbar__menu a').forEach(a => {
    a.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 

// Add class 'active' to section when near top of viewport
function active(){
	for (var i = 1; i <= 4; i++) {
		var section = document.querySelector('#section'+i);
		const box = section.getBoundingClientRect();
		console.log(box);
		if (box.top <= 150 && box.bottom >= 150) {
            const activeSection = section.getAttribute("id");
            console.log(activeSection);
            document.querySelector(`.${activeSection}`).style.color = "red";
            section.classList.add('your-active-class');
            section.style.border = "2px solid white";
        } 
        else{
            const activeSection = section.getAttribute("id");
            document.querySelector(`.${activeSection}`).style.color = "black";
        	section.classList.remove('your-active-class');
        	section.style.border = "";
        }
    }
}

document.addEventListener('scroll',function(){
	active();
});