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
let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
document.getElementById(
    "title"
).innerHTML = `<a href="index.html"><span class="hover-orange">Home</span></a> - <a href="index.html"><span class="hover-orange">Hikking</span></a> - ${arr[id].title}`;
document.getElementById("head").innerHTML = `${arr[id].title}`;
