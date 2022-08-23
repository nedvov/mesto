const sorryImage = new URL('../images/ups2.png', import.meta.url);

export const getImageError = (image) => {
    image.onerror = "";
    image.src = sorryImage;
    return true;
}