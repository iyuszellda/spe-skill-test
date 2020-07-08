function narcissistic(value) {
    var getPow = value.toString().split('').map(function(x) {
        return Math.pow(x, value.toString().length);
    });
    var getAccumValue = getPow.reduce(function(a, c) {
        return a + c;
    });

    // Passing result.
    return getAccumValue === value;
}

const result = narcissistic(111);
console.log('result', result);

function outlier(integers) {
    function par(i) { return i & 1; }

    let parity = par(integers[0]);
    if (parity != par(integers[1])) {
        if (parity == par(integers[2]))
        // [0] and [2] are the true parity so [1] is the outlier
            return integers[1];

        // [1] and [2] are the true parity so [0] is the outlier
        return integers[0];
    }
    let result = integers.find((i) => par(i) != parity);
    if (result === undefined) {
        return false;
    }
    return integers.find((i) => par(i) != parity);
}

const myarray = [2, 4, 0, 100, 4, 11, 2602, 36];
const myarray2 = [160, 3, 1719, 19, 11, 13, -21];
const myarray3 = [11, 13, 15, 19, 9, 13, -21];
const result2_array = outlier(myarray);
const result2_array2 = outlier(myarray2);
const result2_array3 = outlier(myarray3);
console.log('result2', result2_array);
console.log('result2', result2_array2);
console.log('result2', result2_array3);

function findNeedle(haystack) {
    return 'found the needle at position ' + haystack.indexOf('needle');
}
let result3 = findNeedle(['red', 'blue', 'yellow', 'black', 'grey'], 'blue');
console.log('result3', result3);