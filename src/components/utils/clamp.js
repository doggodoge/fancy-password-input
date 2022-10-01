const clamp = (number, lower, higher) => {
    if (number < lower) {
        return lower;
    }
    if (number > higher) {
        return higher
    }
    return number;
}

export default clamp;
