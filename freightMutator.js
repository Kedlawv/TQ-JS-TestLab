function mutate(inputArray){
    let mutatedCargo = [];

    mutatedCargo = inputArray.map(element => element.toUpperCase());

    return mutatedCargo;
}