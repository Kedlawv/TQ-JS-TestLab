const numArgValue = Number(process.argv[2]);
let output = '';

if(numArgValue % 3 === 0){
    output += 'Java';
}

if(numArgValue % 5 === 0){
    output += 'Script';
} 

if(numArgValue % 3 !== 0 && numArgValue % 5 !== 0){
    output = String(numArgValue);
}

console.log(output);

