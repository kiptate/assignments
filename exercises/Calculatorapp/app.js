let rs = require('readline-sync');

let operations = ['addition', 'subtraction', 'multiplication', 'division']
let question = rs.keyInSelect(operations, 'Want to do some Math?')

const calculator = (operation) => {
    let firstNumber = Number(rs.question('Please enter the first number.'))
    let secondNumber = Number(rs.question('Now enter the second number.'))

    switch (question) {
        case 0:
            return firstNumber + secondNumber;
            break;
    case 1:
            return firstNumber - secondNumber;
            break;
    case 2:
            return firstNumber * secondNumber;
            break;
    case 3:
            return firstNumber / secondNumber;
            break;
    }
}
console.log(calculator(question))
