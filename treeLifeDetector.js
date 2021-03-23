const argValue = process.argv[2];
const arg2Number = Number(argValue);

if(arg2Number === 0){
    console.log('alive');
}else{
    console.log('other');
}