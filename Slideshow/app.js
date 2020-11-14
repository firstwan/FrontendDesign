function imageGallery(){
    const highlight = document.querySelector('.highlight');
    const previews = document.querySelectorAll(".image-preview img");
    
    previews.forEach(preview => {
        preview.addEventListener('click', function() {
            const selectedImage = this.src;

            highlight.src = selectedImage

            previews.forEach(preview => preview.classList.remove("image-active"))
            preview.classList.add("image-active")
        });
    });

};


imageGallery();
