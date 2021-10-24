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

const myArr = [2, 3, 4, 5, 5, 6, 5, 2]

const getOccurrences = (arr) => {
    arr.reduce((prev, cur) => {
        if (!prev[cur]) {
            prev[cur] = 1
        } else {
            prev[cur] = prev[cur] + 1
        }
        console.log(prev)
        return prev
    }, {})

}

console.log(getOccurrences(myArr))

