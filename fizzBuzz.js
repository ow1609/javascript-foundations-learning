// User story:
// If I enter a number that is divisible by 3
    // it returns 'Fizz'
// Else, if I enter a number that is divisible by 5
    // it returns 'Buzz'
// Else, if I enter a number that is divisible by 3 and 5
    // it returns 'FizzBuzz'
// Else, if I enter any other number
    // it returns the number

const fizzBuzz = (x) => {
    if ((x % 3 === 0) && (x % 5 ===0)){
        return 'FizzBuzz'
    } else if (x % 3 === 0){
        return 'Fizz'
    } else if (x % 5 === 0){
        return 'Buzz'
    } else {
        return x
    }
}

// console.log(fizzBuzz(3))
// console.log(fizzBuzz(5))
// console.log(fizzBuzz(15))
// console.log(fizzBuzz(8))