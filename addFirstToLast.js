function addFirstToLast(array){
    let firstAndLast = '';
    const arrLength = array.length;
    
    if(arrLength > 0){
        firstAndLast = array[0] + array[array.length-1];
    }

    return firstAndLast;
}

console.log(addFirstToLast(['a','b','c']));