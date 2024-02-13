// const filterbtns = [
//     {
//         id: '1',
//         name: 'Pasta',
//     },
//     {
//         id: '2',
//         name: 'Noodles',
//     },
//     {
//         id: '3',
//         name: 'Rice',
//     },
//     {
//         id: '4',
//         name: 'Soup',
//     },
//     {
//         id: '5',
//         name: 'Others',
//     },
// ]

// const filters = [...new Set(filterbtns.map((btn) => {
//     return btn
// }))]

// document.querySelector(".filter-btns").innerHTML = filters.map((btn) => {
//     var { name, id } = btn;
//     return (
//         "<button onclick ='filterItems("+(id)+`)'>${name}</button>`
//     )
// }).join('')


const products = [
    {
        id: 0,
        image: '/assets/Jollof rotini pasta and chicken.jpg',
        title: 'Jollof rotini pasta and chicken',
        description: 'A yummy delicacy that serves your taste buds right.',
        price: '₦3000'
    },
    {
        id: 1,
        image: 'assets/Delicious Oriental rice and chicken.jpg',
        title: 'Delicious Oriental rice and chicken',
        description: 'well- garnished intercontinental rice delightful to your tastebuds.',
        price: '₦3000'
    },
    {
        id: 2,
        image: 'assets/Oriental noodles and chicken.jpg',
        title: 'Oriental noodles and chicken',
        description: 'A different kind of noodles with a sumptuous taste.',
        price: '₦3000'
    },
    {
        id: 3,
        image: 'assets/Jollof noodles and chicken.jpg',
        title: 'Jollof Noodles and Chicken',
        description: 'African jollof noodles, well garnished with veggies and chicken.',
        price: '₦3000'
    },
    {
        id: 4,
        image: 'assets/Suya noodles.jpg',
        title: 'Spicy suya noodles',
        description: 'Hot and spicy suya noodles with suya chunks.',
        price: '₦3000'
    },
    {
        id: 5,
        image: 'assets/Native noodles and chicken.jpg',
        title: 'Native noodles and chicken',
        description: 'African delicacy garnished with assorted fish, meat, and chicken.',
        price: '₦3000'
    },
    {
        id: 6,
        image: 'assets/Chinese noodles with chicken.png',
        title: 'Chinese noodles with chicken',
        description: 'Special taste of an intercontinental dish bringing joy to your taste buds.',
        price: '₦3000'
    },
    {
        id: 7,
        image: 'assets/Creamy pasta and chicken.jpg',
        title: 'Creamy pasta and chicken',
        description: 'The special taste of an Italian recipe, with a rich and creamy taste.',
        price: '₦3000'
    },
    {
        id: 8,
        image: 'assets/Well-garnished Fried rice and chicken.jpg',
        title: 'Fried rice and chicken',
        description: 'Well-garnished fried rice and chicken.',
        price: '₦3000'
    },
    {
        id: 9,
        image: 'assets/Okra soup and chicken.jpg',
        title: 'Okra soup with assorted',
        description: 'Okra soup with a diverse mix of flavors for a delightful meal.',
        price: '₦3500'
    },
    {
        id: 10,
        image: 'assets/Edikang-ikong soup with assorted.jpg',
        title: 'Edikang-ikong soup with assorted',
        description: 'Indulge in the exquisite taste of Edikang-ikong soup, complemented by a tempting assortment of ingredients.',
        price: '₦3500'
    },
    {
        id: 11,
        image: 'assets/Afang soup with assorted.jpg',
        title: 'Afang soup with assorted',
        description: 'Relish the robust simplicity of Afang soup, a flavorful and traditional delight.',
        price: '₦3500'
    },
    {
        id: 12,
        image: 'assets/Egusi soup with assorted.jpg',
        title: 'Egusi soup with assorted',
        description: 'Savor the creamy goodness of Egusi soup, a delectable dish rich in flavor and texture.',
        price: '₦3500'
    },
    {
        id: 13,
        image: 'assets/Ofe-nsala with assorted.jpg',
        title: 'Ofe-nsala with assorted',
        description: 'Delight in the flavorful simplicity of Ofe-nsala, a Nigerian soup known for its rich taste and aromatic essence.',
        price: '₦3500'
    },
    {
        id: 14,
        image: 'assets/Bitter leaf soup with assorted.jpg',
        title: 'Bitter leaf soup with assorted',
        description: 'Experience the unique tang of Bitter Leaf soup, a distinctive and flavorful dish in African cuisine.',
        price: '₦3500'
    },
    {
        id: 15,
        image: 'assets/Ogbono soup with assorted.jpg',
        title: 'Ogbono soup with assorted',
        description: 'Savor the heartiness of Ogbono soup, a luscious and thick Nigerian dish with a delightful blend of flavors.',
        price: '₦3500'
    },
    {
        id: 16,
        image: 'assets/Ripe plantain and eggs.jpg',
        title: 'Ripe plantain and eggs',
        description: 'Enjoy a delightful combination of ripe plantains and eggs, creating a perfect blend of sweet and savory flavors.',
        price: '₦2500'
    },
    {
        id: 17,
        image: 'assets/Yam and eggs.jpg',
        title: 'Yam and eggs',
        description: 'Savor the simplicity of yam and eggs, a delicious and satisfying pairing of hearty yams and flavorful eggs.',
        price: '₦2500'
    },
];

const categories = [...new Set(products.map((item) => { return item }))];

let searchBar = document.getElementById("searchFood").addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return item.title.toLowerCase().includes(searchData);
    });

    displayItem(filterData);
});

 // filter Buttons
 const allBtn = document.querySelector(".all")
 const pastaBtn = document.querySelector(".pasta")
 const noodlesBtn = document.querySelector(".noodles")
 const riceBtn = document.querySelector(".rice")
 const soupBtn = document.querySelector(".soup")
 const extraBtn = document.querySelector(".extra")


allBtn.addEventListener('click', () => {
    let searchBar = document.getElementById("searchFood");
    searchBar.value = '';
    displayItem(categories);
  });
  
pastaBtn.addEventListener('click', () => {
    let searchBar = document.getElementById("searchFood");
    searchBar.value = 'Pasta';
    filterData = categories.filter(item => item.title.includes('pasta'));
    displayItem(filterData);
});
  
noodlesBtn.addEventListener('click', () => {
    let searchBar = document.getElementById("searchFood");
    searchBar.value = 'Noodles';
    filterData = categories.filter(item => item.title.includes('noodles'));
    displayItem(filterData);
  });
  
riceBtn.addEventListener('click', () => {
    let searchBar = document.getElementById("searchFood");
    searchBar.value = 'Rice';
    filterData = categories.filter(item => item.title.includes('rice'));
    displayItem(filterData);
  });
  
soupBtn.addEventListener('click', () => {
    let searchBar = document.getElementById("searchFood");
    searchBar.value = 'Soup';
    filterData = categories.filter(item => item.title.includes('soup'));
    displayItem(filterData);
  });
  
extraBtn.addEventListener('click', () => {
    let searchBar = document.getElementById("searchFood");
    searchBar.value = 'Extra';
    filterData = categories.filter(item => item.title.includes('eggs'));
    displayItem(filterData);
  });


const displayItem = (items) => {
    const dishContainer = document.querySelector(".dishContainer");

    if (items.length === 0) {
        dishContainer.innerHTML = "<p class='error'>Oops...dish not found!</p>";
    } else {
        dishContainer.innerHTML = items.map((item) => {
            var { image, title, description, price } = item;

            return (
                `
                <div class="dishItem" data-aos="zoom-in">
                    <div class="dish-image">
                        <img class="dishImg" src="${image}">
                    </div>
                    <div>
                        <h2 class="dishName">${title}</h2>
                    </div>
                    <table>
                        <tr>
                            <td style="text-align: left;"><b>Price:</b></td>
                            <td style="text-align: right;"><b class="dishPrice">${price}.00</b></td>
                        </tr>
                    </table>
                    <a href="checkout.html">
                        <button onclick="order(${item.id})">Yes, I want</button>
                    </a>
                </div>`
            );
        }).join('');
    }
};

function order(itemId) {
    // Retrieve the selected product based on the itemId
    const selectedProduct = products.find(product => product.id === itemId);

    // Save the selected product to local storage
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));

    // Redirect to the checkout page
    // window.location.href = "/checkout.html";
}

// Initial display with all categories
displayItem(categories);


