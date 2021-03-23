const numArgValue = Number(process.argv[2]);

if(numArgValue === 0){
    console.log('alive');
}else if(numArgValue === 1){
    console.log('flowering');
}else if(numArgValue === 2){
    console.log('shedding');
}else{
    console.log('other');
}



