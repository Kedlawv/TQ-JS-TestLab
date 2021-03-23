function scanAndFilter(inputArray,stringToFilterOut){
    let filteredArray=[];

    filteredArray = inputArray.filter(element => element !== stringToFilterOut);

    return filteredArray;
}

const cargo = ['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'];

const filteredCargo = scanAndFilter(cargo, 'ray guns');