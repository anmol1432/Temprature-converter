console.log('loaded.......')
let btn = document.querySelector('.btn');
const calcTemp = () => {
    let tempNumber = document.querySelector('#input-temp').value;
    let tempUnit = document.querySelector('#tempUnit').value;
    let result = document.getElementById("result");
    const cel = function (cel) {
        return Math.round((cel * 9 / 5) + 32);
    }

    const fah = function (tempNumber) {
        return tempNumber - 32 * 5 / 9;
    }
    if (tempUnit == "cel") {
        let answercel = cel(tempNumber);
        result.innerHTML = `${answercel} Farenheit👻`;
    }
    else {
        let answerFah = fah(tempNumber);
        result.innerHTML = `${answerFah} celsius 👻`;
    }
};

btn.addEventListener('click', calcTemp);
