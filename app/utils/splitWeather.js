export const splitWeather = (degree) => {
    if(degree){
        const deg = degree.split(".");
        return deg[0];
    }
    return degree;
};