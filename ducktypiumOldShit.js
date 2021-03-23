const VALID_COLORS = ["red", "yellow", "blue"];

class Ducktypium {
    constructor(color) {
        if (!VALID_COLORS.includes(color)) {
            throw new TypeError("Color must be red, yellow, or blue!");
        }

        this.color = color;
        this.calibrationSequence = [];
    }

    refract(refColor) {

        if (!VALID_COLORS.includes(refColor)) {
            throw new TypeError("Color must be red, yellow, or blue!");
        }
        if (this.color === "red" && refColor === "blue" || this.color === "blue" && refColor === "red") {
            return "purple"
        } else if (this.color === "red" && refColor === "yellow" || this.color === "yellow" && refColor === "red") {
            return "orange"
        } else if (this.color === "yellow" && refColor === "blue" || this.color === "blue" && refColor === "yellow") {
            return "green"
        } else if (this.color === refColor) {
            return this.color
        }

    }

    calibrate(arrayOfNumber) {
        let currentArray = arrayOfNumber.sort();

        currentArray.forEach(item => {
            let multiply = item * 3;
            this.calibrationSequence.push(multiply);
        });
    }
}

const dctp = new Ducktypium('bla');
console.log(dctp.refract('blue'));
dctp.calibrate([1, 2, 3, 4]);
console.log(dctp.calibrationSequence);