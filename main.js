// let i=0;
// const images = [
//     'url(css/img1.jpg)',
//     'url(css/img2.jpg)',
//     'url(css/img3.jpg)',
//     'url(css/img4.png)',
//     'url(css/img5.png)',
//     'url(css/img6.png)'
// ];
// const time = 3000;

// function changeImage() {
//     const el = document.getElementById('background');
//     el.classList.add('fade');
//     el.style.backgroundImage = images[i];
//     if (i < images.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }
//     setTimeout('changeImage()', time);
// }

// window.onload = changeImage;

// Hamburger animations
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const link = document.querySelectorAll(".nav-links li a");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});

link.forEach(a => {
    a.addEventListener('click', () => {
        navLinks.classList.remove('open');
    links.forEach(link => {
        link.classList.remove('fade');
    });
    });
})


// Date Diifference function
function dateDifference() {
    const date1 = new Date('2/1/2021');
    const date2 = new Date();
    const diffTime = Math.abs(date1 - date2);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    // console.log(diffTime + " milliseconds");
    // console.log(diffDays + " days");    
    // return diffDays;
    document.getElementById("rdays").innerHTML= "Happily married " + (diffDays-1) + " days ago!";
}

window.onload = dateDifference;