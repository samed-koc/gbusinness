export const uploadImage = (file) => {
    if(file) {
        const image = new Image();
        const result = image.src = URL.createObjectURL(file);
        return result;
    } else {
        return false
    }
};