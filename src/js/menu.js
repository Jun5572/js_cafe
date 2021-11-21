let modal_wrapper = document.querySelector(".modal-wrapper");
let menu = document.getElementById("menu-item");
let images = document.querySelectorAll(".menu-img");
let modal_image = document.querySelector(".modal-image");

images.forEach((image)=>{
    image.addEventListener("click", ()=> {
          modal_image.src = "";
        let image_src = image.getAttribute('src');
        modal_image.classList.add("show");
        modal_wrapper.classList.add("show");
        modal_image.src = image_src;

    });
});

// modal_wrapperをクリックでモーダルクローズ
modal_wrapper.addEventListener("click", () => {
    if (modal_image.classList.contains("show")) {
        modal_wrapper.classList.remove("show");
      modal_image.classList.remove("show");
    }
});