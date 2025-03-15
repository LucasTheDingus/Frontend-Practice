document.addEventListener("DOMContentLoaded", function() {
    const gridImages = document.querySelectorAll('.image');
    const zoomedImg = document.getElementById('zoomedImg');
    
    gridImages.forEach(image => {
        image.addEventListener("click", function() {
            zoomedImg.src = this.src;
            document.querySelector('.grid').style.filter = "blur(5px)";
            zoomedImg.style.display = "block";
            
            setTimeout(() => {
                zoomedImg.style.height = "80vh";
            }, 10);
        });
    });
    
    zoomedImg.addEventListener("click", function() {
        this.style.height = "0";
        
        this.addEventListener("transitionend", function handler() {
            zoomedImg.src = "";
            document.querySelector('.grid').style.filter = "none";
            zoomedImg.style.display = "none";
            zoomedImg.removeEventListener("transitionend", handler);
        }, { once: true });
    });
});