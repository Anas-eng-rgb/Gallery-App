const mainImage = document.querySelector('.main__img');
const images = document.querySelectorAll('.imgee');
const preBtn = document.querySelector('.preBtn');
const nextBtn = document.querySelector('.nextBtn');
let imgIndex = 0;

for(let i = 0 ; i < images.length ; i++) {
    images[i].addEventListener('click' , () => {
        mainImage.src = images[i].src;
    })
}

nextBtn.addEventListener('click' , () => {
    if(imgIndex < images.length - 1) {
        imgIndex = imgIndex + 1;
        mainImage.src = images[imgIndex].src;
    }
    else {
        imgIndex = 0;
    }

});


preBtn.addEventListener('click' , () => {
    if(imgIndex > 0) {
        imgIndex = imgIndex - 1;
        mainImage.src = images[imgIndex].src;
    }
    else {
        imgIndex = images.length - 1;
    }
})



