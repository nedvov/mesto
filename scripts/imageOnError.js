function getImageError(image) {
    image.onerror = "";
    image.src = "./images/ups2.png";
    return true;
}