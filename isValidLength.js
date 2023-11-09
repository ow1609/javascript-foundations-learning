const isValidLength = (phoneNumber) => {
  const validLength = 11;
  console.log(phoneNumber.length)
  if (phoneNumber.length === validLength) { 
    return true; // added return
  } else {
    return false; // added return
  }
}

console.log(isValidLength('12345678911')) // entered a string to be able to use .length