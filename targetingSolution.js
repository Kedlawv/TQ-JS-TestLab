class TargetingSolution{
    constructor(vector3){
        this.x = vector3.x;
        this.y = vector3.y;
        this.z = vector3.z;
    }

    target(){
        return `(${this.x}, ${this.y}, ${this.z})`
    }
}

const sln = new TargetingSolution({
    x: 45,
    y: 12,
    z: -1
  });
  
  console.log(sln.target());