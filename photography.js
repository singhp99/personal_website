const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".shot").forEach(shot => observer.observe(shot));

window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty("--shift", window.scrollY * 0.5 + "px");
});



// const burger = document.getElementById("burger");
// const menu = document.getElementById("menu");

// burger.addEventListener("click", () => {
//     burger.classList.toggle("change");
//     menu.classList.toggle("active");
// });

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

if (burger && menu) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("change");
        const open = menu.classList.toggle("active");
        document.documentElement.classList.toggle("menu-open", open);
    });
}


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
    const translateXValue = scrollPosition * 0.76;
    
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

function linkHover(triggerSelector, targetSelector, targetSelectorTwo) {
    const trigger = document.querySelector(triggerSelector);
    const toShow = document.querySelector(targetSelector);
    const toShowTwo = document.querySelector(targetSelectorTwo);
    // const toHide = document.querySelector(hideSelector);

    if (!trigger) return;

    trigger.addEventListener('mouseenter', () => {
        if (toShow) toShow.style.visibility = 'visible';
        if (toShowTwo) toShowTwo.style.visibility = 'visible';
        // if (toHide) toHide.style.visibility = 'hidden';
    });

    trigger.addEventListener('mouseleave', () => {
        if (toShow) toShow.style.visibility = 'hidden';
        if (toShowTwo) toShowTwo.style.visibility = 'hidden';
        // if (toHide) toHide.style.visibility = 'visible';
    });
}

linkHover('.reveal-right1', '.intro-hidden','.intro-box3');

var burgerMenu = document.getElementsByClassName('burger-menu');

var overlay = document.getElementsByClassName('menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});



