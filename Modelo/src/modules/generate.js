const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const genUppercase = () => String.fromCharCode(rand(65,91));
const genLowercase = () => String.fromCharCode(rand(97,123));
const genNumber = () => String.fromCharCode(rand(48,58));
const symbols = ',.;-_^~[{]}()!@#$%¨&*/?><=+=';
const genSymbol = () => symbols[rand(0, symbols.length)];

export default function genPassword(len, up, low, num, sym) {

    const Array = [];

    len = Number(len)

    for (let i = 0; i < len ; i++){

        up && Array.push(genUppercase());
        low && Array.push(genLowercase());
        num && Array.push(genNumber());
        sym && Array.push(genSymbol());
    }

   return Array.join('').slice(0, len);
}
