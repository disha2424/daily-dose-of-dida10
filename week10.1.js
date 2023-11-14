     window.onscroll = function () {
            scrollRotate("reload");
            scrollRotate("reload2");
        };

        function scrollRotate(id) {
            let image = document.getElementById(id);
            image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
        }


document.querySelectorAll(".image-button").forEach(function(button, index) {
    button.addEventListener("click", function() {
        openModal(index);
    });
});

function openModal(index) {
    let modal = document.querySelectorAll(".modal")[index];
    modal.style.display = "block";
}

document.querySelectorAll(".close-button").forEach(function(button) {
    button.addEventListener("click", closeModal);
});

function closeModal() {
    document.querySelectorAll(".modal").forEach(function(modal) {
        modal.style.display = "none";
    });
}