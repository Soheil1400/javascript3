const arr = [-5, 0 ,6 ,9 ,2]

function max(prevVal, currentVal){
    if (prevVal > currentVal){
        return prevVal
    }
    return currentVal
}

function min(prevVal, currentVal){
    if (prevVal > currentVal){
        return currentVal
    }
    return prevVal
}

const max1 = arr.reduce(max)
const min1 = arr.reduce(min)

const arr1 = [max1,min1]

console.log(arr1)

const printNumbers = (input) => {
    if (!input && input !== 0) {
        return ''
    }
    input = input.toString()
    let arrInput = input.split('');
    let Result = ''
    arrInput.map(num => {
        Result += `${num}: `
        for (let i = 0; i < num; i++) {
            Result += num;
        }
        Result += '\n'
    })
    return Result;
}

console.log(printNumbers(123))

