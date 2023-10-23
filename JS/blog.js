let arr = [
    {
        img: "images/blog-1.webp",
        title: "Guidelines For International Travel",
    },
    {
        img: "images/blog-2.webp",
        title: "Family Vacation Destinations Tips",
    },
    {
        img: "images/blog-3.webp",
        title: "Cheap Europe Tour Packages",
    },
    {
        img: "images/blog-4.webp",
        title: "Destinations For Next Excursion",
    },
    {
        img: "images/blog-5.webp",
        title: "Why Travel Insurance Is Mandatory",
    },
    {
        img: "images/blog-6.webp",
        title: "Popular Locations In Canada",
    },
    {
        img: "images/blog-7.webp",
        title: "Summer Trekking Camps",
    },
    {
        img: "images/blog-8.webp",
        title: "20 Best Honeymoon Destinations",
    },
    {
        img: "images/blog-9.webp",
        title: "Senior Citizen Tour Packages",
    },
    {
        img: "images/blog-10.webp",
        title: "Trip To Arrange With Friends",
    },
    {
        img: "images/blog-11.webp",
        title: "Explore Great Caravan Routes",
    },
    {
        img: "images/blog-12.webp",
        title: "Don’ts Of Vacation Planning",
    },
];
let cartona = ``;
for (let i = 0; i < arr.length; i++) {
    cartona += ` <div class="col-xl-3 col-lg-4 col-md-6">
    <div class="blog-data">
        <div class="blog" id="${i}">
            <img src="${arr[i].img}" alt="">
            <div class="data">
                <div class="calender">
                    <i class="fa-thin fa-calendar-days"></i>
                    April 27,
                    2023
                </div>
                <div class="title">
                    <a href="blog-details.html?id=${i}">
                        <h4>${arr[i].title}</h4>
                    </a>
                    <a href="blog-details.html?id=${i}">
                        <h5>read more</h5>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
    `;
}
document.getElementById("blog").innerHTML = cartona;
