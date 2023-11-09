const getNumberSign = (x) => {
    if (x > 0){
        return 'positive'
    } else if (x < 0){
        return 'negative'
    } else {
        return 'zero'
    }
}


// console.log(getNumberSign(6));
// console.log(getNumberSign(-24));
// console.log(getNumberSign(0));