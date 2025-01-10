
const shouldDoContainer = document.querySelector("#do3");
const AshouldDo = document.querySelector(".shouldDoContainer a");


const aEvent = () => {
    shouldDoContainer.addEventListener(("mouseenter"),() => {
        AshouldDo.classList.add("policeSorce");
    })
    shouldDoContainer.addEventListener(("mouseleave"),() => {
        AshouldDo.classList.remove("policeSorce");
    })
}

aEvent()