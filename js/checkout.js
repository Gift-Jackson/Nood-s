const dishImage = document.querySelector(".dishImage")
const inputs = document.querySelector(".inputs")
const countinueBtn = document.querySelector(".countinueBtn")
const backBtn = document.querySelector(".backBtn")
const paymentContainer = document.querySelector(".paymentContainer")
const numberOfPlate = document.querySelector("#number-of-plate")
let dishPrice = document.querySelector(".dishPrice")



countinueBtn.addEventListener("click", ()=>{
    dishImage.classList.add("hide")
    inputs.classList.add("hide")
    paymentContainer.classList.remove("hide")
})
backBtn.addEventListener("click", ()=>{
    dishImage.classList.remove("hide")
    inputs.classList.remove("hide")
    paymentContainer.classList.add("hide")
})

function copyNumber(){
    let copyText = document.querySelector(".form-control span b")
    let acctNum  = document.querySelector("#acctNum")

    copyText.textContent = "Copied"

    acctNum.select();

    document.execCommand("copy")

    setTimeout(function () {
        copyText.textContent = "Copy";
    }, 2500);
}

function order(){
    window.location.href = "/checkout.html"
}