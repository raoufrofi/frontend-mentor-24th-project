let image = document.querySelectorAll("[data-src]");
let fader = document.querySelectorAll(".fade");

let option = {
    // threshold: 1,
    // rootMargin: "0px 0px 400px 0px"
}

let fadeOptions = {

}

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            preLoadImg(entry.target);
            fadingImg(entry.target);
            observer.unobserve(entry.target);
        }
    })
}, option)

let fadeObserver = new IntersectionObserver((entries, fadeObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add("obser");
            fadeObserver.unobserve(entry.target);
        }
    })
}, fadeOptions)

observer.observe(image[0]);
fader.forEach(elem => {
    fadeObserver.observe(elem);
})

// Function
function preLoadImg(element) {
    let source = element.getAttribute("data-src");

    if (!source) {
        return;
    }

    element.src = source;
}


function fadingImg(element) {
    element.classList.add("imgObser");
}