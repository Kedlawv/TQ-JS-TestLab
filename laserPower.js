function calculatePower(inputArray){
    let arrBy2 = [];
    let arrSum = [];

    arrBy2 = inputArray.map(element => element * 2);
    arrSum = arrBy2.reduce((sum,element) => sum + element,0);

    return arrSum;


}