
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

// แสดงอ้างอิง
const sourceIcon = document.querySelector(".source svg")

sourceIcon.addEventListener(("click"),() => {
    console.log(true)
    sourceIcon.classList.add("spin")
    sourceIcon.addEventListener(("animationend"),() => {
        sourceIcon.classList.remove("spin")
    })
    source.classList.contains("expand") ? source.classList.remove("expand") : source.classList.add("expand");
})