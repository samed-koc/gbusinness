export const splitToTwo = (num) => {
    const str = num.split(",");
    const first = str[0];
    const second = str[1].slice(0, 2);
    return `${first}.${second}`;
};