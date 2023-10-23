let arr = [
    {
        img: "images/shop-9.png",
        title: "compass navigator",
        solid_star: `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`,
        empty_star: `<i class="fa-regular fa-star"></i>`,
        old_money: 40,
        new_money: 35,
        cat: "Outdoor Essentials",
    },
    {
        img: "images/shop-10.png",
        title: "duffle bag",
        solid_star: `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`,
        empty_star: `<i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>`,
        old_money: 45,
        new_money: 42,
        cat: "Luggage",
    },
    {
        img: "images/shop-3.png",
        title: "led torch",
        solid_star: `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`,
        empty_star: ``,
        old_money: 20,
        new_money: 18,
        cat: "Outdoor Essentials",
    },
    {
        img: "images/shop-2.png",
        title: "polarized sunglasses",
        solid_star: `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`,
        empty_star: `<i class="fa-regular fa-star"></i>`,
        old_money: 15,
        new_money: 12,
        cat: "Outdoor Essentials",
    },
    {
        img: "images/shop-1.png",
        title: "rain jacket",
        solid_star: `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`,
        empty_star: `<i class="fa-regular fa-star"></i>`,
        old_money: 58,
        new_money: 40,
        cat: "Clothing",
    },
    {
        img: "images/shop-6.png",
        title: "toiletry bag",
        solid_star: `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`,
        empty_star: ``,
        old_money: 45,
        new_money: 40,
        cat: "Toiletries",
    },
    {
        img: "images/shop-8.png",
        title: "travel binocular",
        solid_star: `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`,
        empty_star: ``,
        old_money: 60,
        new_money: 55,
        cat: "Outdoor Essentials",
    },
    {
        img: "images/shop-7.png",
        title: "travel cowboy hat",
        solid_star: `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`,
        empty_star: `<i class="fa-regular fa-star"></i>`,
        old_money: 18,
        new_money: 16,
        cat: "Accessories",
    },
    {
        img: "images/shop-5.png",
        title: "travel sandals",
        solid_star: `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`,
        empty_star: ``,
        old_money: 10,
        new_money: 6,
        cat: "Accessories",
    },
    {
        img: "images/shop-11.png",
        title: "trekking shoe",
        solid_star: `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`,
        empty_star: `<i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>`,
        old_money: 58,
        new_money: 40,
        cat: "Clothing",
    },
    {
        img: "images/shop-12.png",
        title: "trekking sipper",
        solid_star: `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`,
        empty_star: ``,
        old_money: 58,
        new_money: 40,
        cat: "Clothing",
    },
    {
        img: "images/shop-4.png",
        title: "wifi video camera",
        solid_star: `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`,
        empty_star: `<i class="fa-regular fa-star"></i>`,
        old_money: 150,
        new_money: 140,
        cat: "Outdoor Essentials",
    },
];
let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
document.getElementById(
    "title"
).innerHTML = `<a href="index.html"><span class="hover-orange">Home</span></a> - <a href="index.html"><span class="hover-orange">${arr[id].cat}</span></a> - ${arr[id].title}`;

//************** */

document.getElementById("prod-data").innerHTML = `
<h2>${arr[id].title}</h2>
<p><span>₹${arr[id].old_money}.00</span> ₹${arr[id].new_money}.00</p>
<div class="item-icon">
    ${arr[id].solid_star}
    ${arr[id].empty_star}
    <i> (1customer review)</i>
</div>`;

document.getElementById("prod-img").innerHTML = `<img src="${arr[id].img}" alt="">`;

//************** */

let cartona = ``;
for (let i = 4; i < 8; i++) {
    cartona += ` 
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
        <div class="item" id='${i}'>
            <div class="item-img">
                <img src="${arr[i].img}" alt="">
                <div class="overlay row align-items-center">
                    <a href="product.html?id=${i}">
                        <button type="button">add to cart</button>
                    </a>
                </div>
            </div>
            <div class="item-data">
                <a href="product.html?id=${i}"><h2>${arr[i].title}</h2></a>
                <div class="item-icon">
                    ${arr[i].solid_star}
                    ${arr[i].empty_star}
                </div>
                <p><span>₹${arr[i].old_money}.00</span>₹${arr[i].new_money}.00</p>
            </div>
        </div>
    </div>`;
}
document.getElementById("products").innerHTML = cartona;
