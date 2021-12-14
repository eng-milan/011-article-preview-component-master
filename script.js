const shareIconinactive = document.getElementById("share-icon-inactive");
const shareIconactive = document.getElementById("share-icon-active");
const shareLinks = document.getElementById("share-links");
shareIconinactive.addEventListener("click", function () {
    shareLinks.classList.toggle("share-links-visible")
})
shareIconactive.addEventListener("click", function () {
    shareLinks.classList.remove("share-links-visible")
})