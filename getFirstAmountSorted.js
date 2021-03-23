function getFirstAmountSorted(inputArray, inputNumber){
    inputArray.sort();
    return inputArray.slice(0,inputNumber);
}

getFirstAmountSorted(['a','b','c','d'], 2);