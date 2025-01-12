
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

// animation  trick
const Trick = document.getElementsByClassName("Trick")
function TrickAppear(){
    let delay = 0;
    console.log("japisghw")
    for(let i = 0 ; i < Trick.length;i++)
    {
        Trick[i].style.animation = `appear 0.5s ease ${delay}s 1`
        delay = delay + 0.2;
        Trick[i].addEventListener(("animationend"),() => {
            Trick[i].style.opacity = "100%";
        })
    };

}

TrickAppear();
//animation protection
const protections = getElementsByClassName("protection")
function protectionAppear() {
    
}
