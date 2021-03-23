function scan(inputArray){
    let outputArray = [];
    inputArray.forEach(function(element,index){
        if(element === 'contraband'){
            outputArray.push(index);
        }
    });
    return outputArray;
}

scan(['bla','contraband','bla']);