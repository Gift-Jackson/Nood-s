const products = [
    {
        id: 0,
        image: '/assets/Jollof rotini pasta and chicken.jpg',
        title: 'Jollof rotini pasta and chicken',
        description: 'A yummy delicacy that serves your taste buds right.',
        price: '₦2500'
    },
    {
        id: 1,
        image: 'assets/Suya noodles.jpg',
        title: 'Suya Noodles',
        description: 'Hot and spicy suya noodles with suya chunks.',
        price: '₦2500'
    },
    {
        id: 2,
        image: 'assets/Oriental noodles and chicken.jpg',
        title: 'Oriental noodles and chicken',
        description: 'A different kind of noodles with a sumptuous taste.',
        price: '₦2500'
    },
    {
        id: 3,
        image: 'assets/Jollof noodles and chicken.jpg',
        title: 'Jollof Noodles and Chicken',
        description: 'African jollof noodles,well_garnished with veggies and chicken.',
        price: '₦2500'
    },
    {
        id: 4,
        image: 'assets/Creamy pasta and chicken.jpg',
        title: 'Creamy pasta and chicken',
        description: 'The special taste of an Italian recipe,with a rich and creamy taste.',
        price: '₦2500'
    },
    {
        id: 5,
        image: 'assets/Native noodles and chicken.jpg',
        title: 'Native noodles and chicken',
        description: 'African delicacy garnished with assorted fish,meat and chicken.',
        price: '₦2500'
    },
    {
        id: 6,
        image: 'assets/Chinese noodles with chicken.png',
        title: 'Chinese noodles with chicken',
        description: 'Special taste of an intercontinental dish bringing joy to your taste buds.',
        price: '₦2500'
    },
]

const categories = [...new Set(products.map((item) => { return item }))]

const searchBar = document.getElementById("searchBar").addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return item.title.toLowerCase().includes(searchData);
    })

    displayItem(filterData);
})

const displayItem = (items) => {
    document.querySelector(".dishContainer").innerHTML = items.map((item) => {
        var { image, title, description, price } = item;

        return (
            `
            <div class="dishItem">
                <img class="dishImg" src="${image}">
                <h2 class="dishName">${title}</h2>
                <p class="dishDescription">${description}</p>
                <table>
                    <tr>
                        <td style="text-align: left;"><b>Price:</b></td>
                        <td style="text-align: right;"><b class="dishPrice">${price}.00</b></td>
                    </tr>
                </table>
                <button onclick="order('chicken')">Yes, I want</button>
            </div>`
        )
    }).join('')
};
displayItem(categories);