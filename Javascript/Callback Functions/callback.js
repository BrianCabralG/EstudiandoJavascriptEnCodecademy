const plusOne = (n) => {
    return n += 1;
}

let printMsg = (plusFunc, num) => {
    const plusOneToANumber = plusFunc(num);
    console.log(`Number ${num} plus one is: ${plusOneToANumber}`)
}

printMsg(plusOne, 8);