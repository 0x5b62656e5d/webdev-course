const cookieConsent = new bootstrap.Modal(document.getElementById("cookieConsent"), {});
const cookieButton = document.querySelectorAll(".cookieButton");
cookieButton.forEach(btn => btn.addEventListener('click', () => cookieConsent.hide()));
document.addEventListener("DOMContentLoaded", event => {
    cookieConsent.show();
    // Make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
    
    
            })
        });
    
    }
    // nEd if innerWidth
});

// $ function for querySelector
$ = selector => document.querySelector(selector);

// Changing to dark/light mode
const colorMode = document.querySelectorAll("#colorMode");
const colorModeIcon = document.querySelector("#colorModeIcon");
const content = document.getElementsByClassName("content")[0];
const carouselColor = document.querySelectorAll(".carousel-caption");
const carouselPrev = document.querySelector(".carousel-control-prev");
const carouselNext = document.querySelector(".carousel-control-next");
const carouselIndicator = document.querySelector(".carousel-indicators");
const navColor = document.querySelector("#navbar");
const navSearch = document.querySelector(".btn");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownItem = document.querySelectorAll(".dropdown-item");
const footerbg = document.querySelector("#footer");
const footerText = document.querySelector(".footerText");

const pTag = document.querySelectorAll("p");
const h2Tag = document.querySelectorAll("h2");
const svgTag = document.querySelectorAll("svg");

var color = "dark";

document.addEventListener("DOMContentLoaded", event => {
    content.style.backgroundColor = 'rgb(31, 41, 55)';
    carouselColor.forEach(caption => caption.style.color = 'white');
    carouselPrev.style.cssText = 'filter: invert(0%);';
    carouselNext.style.cssText = 'filter: invert(0%);';
    carouselIndicator.style.cssText = 'filter: invert(0%);';
    
    dropdownMenu.style.backgroundColor = 'rgb(31, 41, 55)';
    dropdownItem.forEach(item => item.style.color = 'white');
    navSearch.style.cssText = 'border-color: white; color: white;';

    svgTag.forEach(svg => svg.style.backgroundColor = 'rgb(33, 37, 41)');
    colorModeIcon.style.backgroundColor = 'rgb(33, 37, 41)';

    footerbg.style.backgroundColor = 'rgb(31, 41, 55)';
    footerText.style.color = 'white';

    pTag.forEach(desc => desc.style.color = 'white');
    h2Tag.forEach(h2 => h2.style.color = 'white');
});

colorMode.forEach(button => {

    button.addEventListener("click", event => {
        console.log("color changed");
        if (content.style.backgroundColor === 'rgb(31, 41, 55)') {
            color = 'white';

            pTag.forEach(desc => desc.style.color = 'rgb(31, 41, 55)');
            h2Tag.forEach(h2 => h2.style.color = 'rgb(31, 41, 55)');

            content.style.backgroundColor = 'white';
            carouselColor.forEach(caption => caption.style.color = 'rgb(31, 41, 55)');
            carouselPrev.style.cssText = 'filter: invert(100%);';
            carouselNext.style.cssText = 'filter: invert(100%);';
            carouselIndicator.style.cssText = 'filter: invert(100%);';
            
            svgTag.forEach(svg => svg.style.backgroundColor = 'rgb(248, 249, 250)');
            colorModeIcon.style.backgroundColor = 'rgb(248, 249, 250)';

            dropdownMenu.style.backgroundColor = 'white';
            dropdownItem.forEach(item => item.style.color = 'rgb(31, 41, 55)');

            navColor.classList.toggle('bg-dark');
            navColor.classList.toggle('navbar-dark');
            navColor.classList.toggle('bg-light');
            navColor.classList.toggle('navbar-light');
            navSearch.style.cssText = 'border-color: rgb(31, 41, 55); color: rgb(31, 41, 55);';

            footerbg.style.backgroundColor = 'white';
            footerText.style.color = 'rgb(31, 41, 55)';
        } else if (content.style.backgroundColor === 'white') { 
            color = 'dark';
            
            pTag.forEach(desc => desc.style.color = 'white');
            h2Tag.forEach(h2 => h2.style.color = 'white');

            content.style.backgroundColor = 'rgb(31, 41, 55)';
            carouselColor.forEach(caption => caption.style.color = 'white');
            carouselPrev.style.cssText = 'filter: invert(0%);';
            carouselNext.style.cssText = 'filter: invert(0%);';
            carouselIndicator.style.cssText = 'filter: invert(0%);';

            svgTag.forEach(svg => svg.style.backgroundColor = 'rgb(33, 37, 41)');
            colorModeIcon.style.backgroundColor = 'rgb(33, 37, 41)';

            dropdownMenu.style.backgroundColor = 'rgb(31, 41, 55)';
            dropdownItem.forEach(item => item.style.color = 'white');

            navColor.classList.toggle('bg-dark');
            navColor.classList.toggle('navbar-dark');
            navColor.classList.toggle('bg-light');
            navColor.classList.toggle('navbar-light');
            navSearch.style.cssText = 'border-color: white; color: white;';

            footerbg.style.backgroundColor = 'rgb(31, 41, 55)';
            footerText.style.color = 'white';
        }
    });

});

function carouselColorCheck() {
    if ($(`#carousel3`).classList.contains(`active`)
        || $(`#carousel4`).classList.contains(`active`)
        || $(`#carousel5`).classList.contains(`active`)) {
        carouselPrev.style.cssText = 'filter: invert(0%);';
        carouselNext.style.cssText = 'filter: invert(0%);';
        carouselIndicator.style.cssText = 'filter: invert(0%);';
    }
    if (($(`#carousel1`).classList.contains(`active`)
        || $(`#carousel2`).classList.contains(`active`)
        || $(`#carousel6`).classList.contains(`active`)
        || $(`#carousel7`).classList.contains(`active`)
        || $(`#carousel8`).classList.contains(`active`))
        && color === 'white') {
        carouselPrev.style.cssText = 'filter: invert(100%);';
        carouselNext.style.cssText = 'filter: invert(100%);';
        carouselIndicator.style.cssText = 'filter: invert(100%);';
    }
}

var intervalId = setInterval(carouselColorCheck, 500);