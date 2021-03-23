function scan(inputArray){
    let count = 0;
    inputArray.forEach(element => {
        if(element === 'contraband'){
            count++;
        }
    });
    return count;
}

scan(['bla','contraband','bla']);