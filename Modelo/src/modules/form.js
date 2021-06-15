import gen from './generate';

const password = document.querySelector('.password');
const length = document.querySelector('.length');
const UpperCase = document.querySelector('.chk-up');
const LowerCase = document.querySelector('.chk-low');
const Num = document.querySelector('.chk-num');
const Sym = document.querySelector('.chk-sym');
const Btn = document.querySelector('.generate');


export default () => {

    Btn.addEventListener('click', () => {

        password.innerHTML = generate();

    })
};

function generate() {

    const password = gen(
        length.value,
        UpperCase.checked,
        LowerCase.checked,
        Num.checked,
        Sym.checked,
    );

    return password || 'Please select an Option below';

}