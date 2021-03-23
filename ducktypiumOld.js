class Ducktypium {

    constructor(color) {

        if (color === 'red' || color === 'blue' || color === 'yellow') {
            this.color = color;
        } else {
            throw new TypeError('unknown color');
        }
    }

    color = '';
    calibrationSequence = [];

    checkColor(color) {
        if (color === 'red' || color === 'blue' || color === 'yellow') {
            return true;
        } else {
            throw new TypeError('unknown color');
        }
    }

    refract(color) {
        if (!(color === 'red' || color === 'blue' || color === 'yellow')) {
            throw new TypeError('unknown color');
        }
        
        if (this.color === color) {
            return color;
        }
        if (color === 'red' || this.color === 'red') {
            if (color === 'blue' || this.color === 'blue') {
                return 'purple';
            }
            if (color === 'yellow' || this.color === 'yellow') {
                return 'orange';
            }
        }
        if (color === 'blue' || this.color === 'blue') {
            if (color === 'yellow' || this.color === 'yellow') {
                return 'green';
            }
        }
    }

    calibrate(numbers) {
        numbers.sort();
        const numbersTimes3 = numbers.map(element => element * 3);
        this.calibrationSequence = numbersTimes3;
    }
}

const dctp = new Ducktypium('bla');
console.log(dctp.refract('blue'));
dctp.calibrate([1, 2, 3, 4]);
console.log(dctp.calibrationSequence);