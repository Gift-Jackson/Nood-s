document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the selected product from local storage
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

    // Update checkout page with retrieved information
    const dishNameDisplay = document.getElementById("dishNameDisplay");
    dishNameDisplay.textContent = selectedProduct.title;

    const dishNameInput = document.getElementById("dishName");
    dishNameInput.value = selectedProduct.title; // Set as value instead of placeholder



    document.getElementById("dishPrice").value = parseFloat(selectedProduct.price.replace(/[^\d.]/g, '')).toFixed(2);
    document.querySelector(".dishImage img").src = selectedProduct.image;
});

const numberOfPlatesInput = document.getElementById("number-of-plate");
const totalPriceInput = document.getElementById("dishPrice");

numberOfPlatesInput.addEventListener("input", updateTotalPrice);

function updateTotalPrice() {
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    const priceNumeric = parseFloat(selectedProduct.price.replace(/[^\d.]/g, ''));
    const numberOfPlates = parseInt(numberOfPlatesInput.value);

    if (!isNaN(priceNumeric) && !isNaN(numberOfPlates)) {
        const total = priceNumeric * numberOfPlates;
        totalPriceInput.value = total.toFixed(2);
        const dishPriceDisplay = document.querySelector('.amount');
        dishPriceDisplay.textContent = totalPriceInput.value;
    } else {
        console.error("Error calculating total price.");
    }
}

// ... (No changes to the existing code)



const dishImage = document.querySelector(".dishImage")
const inputs = document.querySelector(".inputs")
const countinueBtn = document.querySelector(".countinueBtn")
const backBtn = document.querySelector(".backBtn")
const paymentContainer = document.querySelector(".paymentContainer")


function copyNumber() {
    let copyText = document.querySelector(".form-control span b")
    let acctNum = document.querySelector("#acctNum")

    copyText.textContent = "Copied"

    acctNum.select();

    document.execCommand("copy")

    setTimeout(function () {
        copyText.textContent = "Copy";
    }, 2500);
}

backBtn.addEventListener("click", () => {
    dishImage.classList.remove("hide")
    countinueBtn.classList.remove("hide");
    paymentContainer.classList.remove("active");
    inputs.classList.remove("inactive")
})

countinueBtn.addEventListener("click", () => {
    dishImage.classList.add("hide");
    countinueBtn.classList.add("hide");
    paymentContainer.classList.add("active");
    inputs.classList.add("inactive")
})

const submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const phoneNumberInput = document.getElementById("number");
    const addressInput = document.getElementById("address");
    const numberOfPlatesInput = document.getElementById("number-of-plate");
    const errorMsg = document.querySelector(".errorMsg")

    if (
        nameInput.value === "" ||
        phoneNumberInput.value === "" ||
        addressInput.value === "" ||
        numberOfPlatesInput.value === ""
    ) {
        dishImage.classList.remove("hide")
        countinueBtn.classList.remove("hide");
        paymentContainer.classList.remove("active");
        inputs.classList.remove("inactive")
        
        errorMsg.style.display = "block";
        setTimeout(()=>{
            errorMsg.style.display="none"
        }, 2500)
    }
    else {
        return true;
    }
})




