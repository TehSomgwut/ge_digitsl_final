
const information = document.getElementById("information")
const type = document.querySelectorAll(".format .type ")
const trick = document.querySelector("#scammerTrick")
const trickInformation = document.querySelector("#scammerTrickInformation")
const protection = document.querySelector("#protection")
const protectionInformation = document.querySelector("#protectionInformation")
const shouldDo = document.getElementById("shouldDo")
const shouldDoInformation = document.getElementById("shoudDoInformation")
const welcome = document.querySelector(".welcome")

class TypeSource{
    constructor(auther, releasedate, namee, link, searchdate ){
        this.auther = auther;
        this.releasedate = releasedate;
        this.namee = namee;
        this.searchdate = searchdate;
        this.link = link;
    }
}

const trickSource = new TypeSource("จิราภพ ทวีสูงส่ง จาก thaipbs และ ตำรวจสอบสวนกลาง (CIB)","2 ก.ค. 67","เปิด 7 จุดสังเกต กลโกงมิจฉาชีพ “หลอกลงทุน”","https://www.thaipbs.or.th/now/content/1347", "8 ม.ก. 2568");
const protectionSource = new TypeSource("ธนาคาร CMB ไทย","26 พ.ย. 67","5 วิธีป้องกันมิจฉาชีพหลอกให้โอนเงินในยุคดิจิทัล","https://shorturl.asia/lgR4U","9 ม.ก. 2568");
const shouldDoSource = new TypeSource("ธนาคาร CMB ไทย","26 พ.ย. 67","5 วิธีป้องกันมิจฉาชีพหลอกให้โอนเงินในยุคดิจิทัล","https://shorturl.asia/lgR4U","9 ม.ก. 2568");
let currentSource;

type.forEach((t) => {
    t.addEventListener(("click"),() => {
        sourceContainer.style.display = "none";
        source.style.display = "flex";
        source.classList.remove("expand");
    })
})

trick.addEventListener(("click"),() => {
    welcome.style.display = 'none';
    trickInformation.style.display = 'grid';
    protectionInformation.style.display = 'none';
    shouldDoInformation.style.display = 'none';
    currentSource = trickSource;

    trick.classList.add("hovered");
    protection.classList.remove("hovered");
    shouldDo.classList.remove("hovered");

    // sourceContainer.style.display = "none";
    // source.style.display = "block";
})

protection.addEventListener(("click"), () => {
    welcome.style.display = 'none';
    protectionInformation.style.display = 'block';
    trickInformation.style.display = 'none';
    shouldDoInformation.style.display = 'none';
    currentSource = protectionSource;

    trick.classList.remove("hovered");
    protection.classList.add("hovered");
    shouldDo.classList.remove("hovered");

    // sourceContainer.style.display = "none";
    // source.style.display = "block";
})

shouldDo.addEventListener(("click"),() => {
    welcome.style.display = 'none';
    protectionInformation.style.display = 'none';
    trickInformation.style.display = 'none';
    shouldDoInformation.style.display = 'block';
    currentSource = shouldDoSource;

    trick.classList.remove("hovered");
    protection.classList.remove("hovered");
    shouldDo.classList.add("hovered");

    // sourceContainer.style.display = "none";
    // source.style.display = "block";
})

const sourceContainer = document.querySelector(".sourceContainer")
const source = document.querySelector(".source")
const auther = document.getElementById("auther")
const releasedate = document.getElementById("releasedate")
const namee = document.getElementById("name")
const searchdate = document.getElementById("searchdate")
const link = document.getElementById("link")
const sourceAll = document.getElementById("sourceAll")

const sourceAppear = () => {
    if(sourceContainer.style.display === 'none'){
        sourceContainer.style.display = 'block'
        sourceContainer.classList.add("sourceContainerAppear")
        console.log(sourceContainer.classList.contains("sourceContainerAppear"))
    }
}

auther.addEventListener(("click"),() => {
    sourceContainer.textContent = `${currentSource.auther}`;
    sourceAppear();
})

releasedate.addEventListener(("click"),() => {
    sourceContainer.textContent = `${currentSource.releasedate}`;
    sourceAppear();
})

namee.addEventListener(("click"),() => {
    sourceContainer.textContent = `${currentSource.namee}`;
    sourceAppear();
})

searchdate.addEventListener(("click"),() => {
    sourceContainer.textContent = `${currentSource.searchdate}`;
    sourceAppear();
})

link.addEventListener(("click"),() => {
    sourceContainer.textContent = `${currentSource.link}`;
    sourceAppear();
})

sourceAll.addEventListener(("click"),() => {
    sourceContainer.textContent = `ถูกเขียนโดย : ${currentSource.auther} เมื่อเวลา ${currentSource.releasedate} โดยมีชื่อบทความคือ : ${currentSource.namee} \n และถูกนำมาเรียบเรียงในบทความนี้เมื่อ : ${currentSource.searchdate}`;
    sourceAppear();
})

