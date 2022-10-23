//opposite mumber
function opposite(number) {
    return -number;
}

//convert a Number to a String!
function numberToString(num) {
    return String(num);
}

//convert boolean values to strings 'Yes' or 'No'
function boolToWord(bool) {
    if (bool) {
        return "Yes";
    }
    else {
        return "No";
    }
}

//highest and lowest
function highAndLow(numbers) {
    let arr = numbers.split(' ');
    let highest = arr[0], lowest = arr[0];
    arr.forEach((item) => {
        if (Number(item) > Number(highest)) {
            highest = item;
        }
        if (Number(item) < Number(lowest)) {
            lowest = item;
        }
    });
    return highest + ' ' + lowest;
}

//vowel Count
function getCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++;
        }
    }
    return count;
}

//square Every Digit
function squareDigits(num) {
    let array = String(num).split('');
    let newArray = array.map((item) => item * item);
    return Number(newArray.join(''));
}

//get the Middle Character
function getMiddle(s) {
    if (s.length % 2 !== 0) {
        return s[(s.length - 1) / 2];
    }
    else {
        return s[(s.length / 2) - 1] + s[(s.length / 2)];
    }
}

//you're a square!
var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0;
}

//list Filtering
function filter_list(l) {
    let newList = l.filter((item) => {
        if (Number.isInteger(item)) {
            return true;
        }
        else {
            return false;
        }
    });
    return newList;
}

//multiples of 3 or 5
function solution(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            sum += i;
            continue;
        }
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

//find the odd int
function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
        let count = 0;
        for (let j = 0; j < A.length; j++) {
            if (A[j] === A[i]) {
                count++;
            }
        }
        if (count % 2 !== 0) {
            return A[i];
        }
    }
}