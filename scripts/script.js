/* --- On-off button --- */

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    bgItems: getStyle(html, "--bg-items"),
    itemsDetails: getStyle(html, "--items-details"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorHeadingsHover: getStyle(html, "--headings-hover"),
    colorText: getStyle(html, "--color-text"),
}

const lightMode = {
    bg: "#F2F2F0",
    bgPanel: "#f2f9f6",
    bgItems: "#415CF2",
    itemsDetails: "#6B7FF2",
    colorHeadings: "#2745F2",
    headingsHover: "#a8b4f3",
    colorText: "#586bd4"
}

const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(lightMode) : changeColors(initialColors)
})

const img = document.querySelector("#intro-img");

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? img.setAttribute('src', './assets/img-intro-blue.svg') : img.setAttribute('src', './assets/img-intro.svg');
})



/* --- Scroll animation --- */


function debounce(func, wait, immediate) {
    var timeout;

    return function executedFunction() {
        var context = this;
        var args = arguments;

        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + window.innerHeight * 0.75;
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(function () {
        animeScroll();
    }, 200));
}


/* --- Button mobile --- */


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);