function calculateMass(inputArray){
let mass = 0;

mass = inputArray.reduce((sum,element) => sum + element.length, 0); 

return mass;
}

const cargo = ['cat', 'dog', 'bird'];

const mass = calculateMass(cargo);