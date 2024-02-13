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
        const nop = document
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
    let copyText = document.querySelector(".copyInput span b")
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

const orderForm = document.getElementById("contactform");
const errorMsg = document.querySelector(".errorMsg");

orderForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

    const nameInput = document.getElementById("name");
    const phoneNumberInput = document.getElementById("number");
    const addressInput = document.getElementById("address");
    const numberOfPlatesInput = document.getElementById("number-of-plate");

    if (
        nameInput.value.trim() === "" ||
        phoneNumberInput.value.trim() === "" ||
        addressInput.value.trim() === "" ||
        numberOfPlatesInput.value.trim() === ""
    ) {
        // Show error message
        errorMsg.style.display = "block";
        setTimeout(() => {
            errorMsg.style.display = "none";
        }, 2500);

        // Add or remove classes to show/hide elements
        dishImage.classList.remove("hide");
        countinueBtn.classList.remove("hide");
        paymentContainer.classList.remove("active");
        inputs.classList.remove("inactive");

        console.log("Not submitted")

        // Do not submit the form if there are empty fields
        return false;
    }
    
    const totalPrice = parseFloat(totalPriceInput.value);
    const numberOfPlates = parseInt(numberOfPlatesInput.value);
    const imageUrl = selectedProduct.image;

    localStorage.setItem("totalPrice", totalPrice.toFixed(2));
    localStorage.setItem("numberOfPlates", numberOfPlates);
    localStorage.setItem("imageUrl", imageUrl);

    // Redirect to success page
    // window.location.href = "/success.html";

    // Continue with the form submission if all fields are filled
    orderForm.submit();
});





