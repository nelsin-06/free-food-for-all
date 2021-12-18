// generador de numeros random

const randomNumber = () => {
    const r = Math.random() * (6 - 0) + 0;
    return Math.floor(r);
};

module.exports = randomNumber;
