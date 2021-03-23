const argValue1 = process.argv[2].toLowerCase();
const argValue2 = process.argv[3].toLowerCase();

if(argValue1>argValue2){
    console.log(1);
}else if(argValue1<argValue2){
    console.log(-1);
}else{
    console.log(0);
}


