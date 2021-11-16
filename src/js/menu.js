let modal_wrapper = document.querySelector(".modal-wrapper");
let menu = document.getElementById("menu-item");
let images = document.querySelectorAll(".menu-img");
let modal_image = document.querySelector(".modal-image");

images.forEach((image)=>{
    image.addEventListener('click', ()=> {
        console.log(modal_image);
        modal_wrapper.classList.add("show");
        modal_image.classList.add("show");

        let image_src = image.getAttribute('src');
        modal_image.src = image_src;
        console.log(image);
    });
});