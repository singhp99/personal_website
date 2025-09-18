
// inspired by https://dev.to/foundsiders/frontend-shorts-easily-rotate-the-element-on-scroll-with-javascript-1g4p

window.onscroll = function () {
    scrollRotate();
};



function scrollRotate() {
    let ids = ["small-bubbles_r_1","small-bubbles_l_1","small-bubbles_r_2","small-bubbles_l_2","small-bubbles_r_3","small-bubbles_l_3","small-bubbles_r_4","small-bubbles_l_4","small-bubbles_r_5","small-bubbles_l_5","small-bubbles_r_6","small-bubbles_l_6","small-bubbles_r_7","small-bubbles_l_7","small-bubbles_r_8","small-bubbles_l_8"]
    let angle = window.pageYOffset/2

    ids.forEach(id => {
        let el = document.getElementById(id);
        if (el) el.style.transform= "rotate(" + angle + "deg)";
    }) 
}

function scrollHorizon() {
    let classes = ["reveal-left","reveal-right1", "reveal-right2"]
    const scrollPosition = window.scrollY;
    const translateXValue = scrollPosition * 0.8;
    
     classes.forEach(cl => {
        let elements = document.getElementsByClassName(cl);
        for (let el of elements) {
            if (cl === "reveal-left" ) {
                el.style.transform = `translateX(-${translateXValue}px)`; // move left
            } else if (cl === "reveal-right1" || cl === "reveal-right2") {
                el.style.transform = `translateX(${translateXValue}px)`;  // move right
            }
        }
    });
}

window.addEventListener("scroll", scrollHorizon);