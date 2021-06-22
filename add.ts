const add = (value) => {
    if(+value < 0) {
        throw new Error("Negative not supported")
    }

    const digits = value.split(',');

    return digits.reduce((accumulator, current) => {
        return +accumulator + +current;
    }, 0);
}

module.exports.add = add;