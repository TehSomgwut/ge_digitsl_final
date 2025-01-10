
const information = document.getElementById("information")
const type = document.querySelectorAll(".format .type ")
const trick = document.querySelector("#scammerTrick")
const trickInformation = document.querySelector("#scammerTrickInformation")
const protection = document.querySelector("#protection")
const protectionInformation = document.querySelector("#protectionInformation")
const shouldDo = document.getElementById("shouldDo")
const shouldDoInformation = document.getElementById("shoudDoInformation")
const welcome = document.querySelector(".welcome")


/*type.forEach((t) => {
    t.addEventListener(("click"),() => {
        console.log(`${t.innerText}`);
        information.style.display = 'block';
    })
})*/ 

trick.addEventListener(("click"),() => {
    welcome.style.display = 'none';
    trickInformation.style.display = 'grid';
    protectionInformation.style.display = 'none';
    shouldDoInformation.style.display = 'none';

    trick.classList.add("hovered");
    protection.classList.remove("hovered");
    shouldDo.classList.remove("hovered");
})

protection.addEventListener(("click"), () => {
        welcome.style.display = 'none';
    protectionInformation.style.display = 'block';
    trickInformation.style.display = 'none';
    shouldDoInformation.style.display = 'none';

    trick.classList.remove("hovered");
    protection.classList.add("hovered");
    shouldDo.classList.remove("hovered");
})

shouldDo.addEventListener(("click"),() => {
    welcome.style.display = 'none';
    protectionInformation.style.display = 'none';
    trickInformation.style.display = 'none';
    shouldDoInformation.style.display = 'block';

    trick.classList.remove("hovered");
    protection.classList.remove("hovered");
    shouldDo.classList.add("hovered");
})


class TypeSorce{
    
}