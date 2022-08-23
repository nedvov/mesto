const sorryImage = new URL('../images/ups2.png', import.meta.url);

export const getImageError = (image) => {
    image.onerror = "";
    image.src = sorryImage;
    return true;
}

export const renderLoading = (isLoading, target) => {
    if (isLoading) {
      target._submitButton.value = 'Сохранение...'
    } else {
      target._submitButton.value = target._submitButtonDefaultValue;
    }
  } 