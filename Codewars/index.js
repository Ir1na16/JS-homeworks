//8, 7 kyu

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

//Shortest Word
function findShort(s){
    let min = 20;
    s.split(' ').forEach((item) => {
        if(item.length < min){
            min = item.length;
        }
    });
    return min;
}



//6 kyu



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

//Sum of Digits / Digital Root
function digitalRoot(n) {
    n = String(n);
    let sum = 0;
    for(i = 0; i < n.length; i++){
        sum += Number(n[i]);
    }
    if(sum > 9) {
        return digitalRoot(sum);
    }
    else return sum;
}

//Array.diff
function arrayDiff(a, b) {
    b.forEach((itemB) => {
        if(a.includes(itemB)){
            for(let i = 0; i < a.length; i++){
                if(a[i] === itemB){
                    a.splice(i, 1);
                    i--;
                }
            }
        }
    });
    return a;
}

//Stop gninnipS My sdroW!
function spinWords(string){
    let arr = string.split(' ');
    arr = arr.map((item) => {
        if(item.length >= 5){
            return item.split('').reverse().join('');
        } else {
            return item;
        }
    });
    return arr.join(' ');
}

//Bit Counting
var countBits = function(n) {
    let a = String(n.toString(2)), num = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] === '1'){
            num++;
        }
    }
    return num;
};

//Find The Parity Outlier
function findOutlier(integers){
    let a;
      if(integers[0] % 2 !== 0 && integers[1] % 2 !== 0){
          integers.forEach((item) => {
              if(item % 2 === 0){
                  a = item;
              }
          });
      } else
      if(integers[0] % 2 === 0 && integers[1] % 2 === 0){
          integers.forEach((item) => {
              if(item % 2 !== 0){
                  a = item;
              }
          });
      } else
      if(integers[2] % 2 !== 0){
          integers.forEach((item) => {
              if(item % 2 === 0){
                  a = item;
              }
          });
      } else {
          integers.forEach((item) => {
              if(item % 2 !== 0){
                  a = item;
              }
          });
      }
    return a;
  }

  //Persistent Bugger
   function persistence(num) {
    num = String(num);
    let count = 0;
    if(num.length === 1) {
      return 0;
    }
    while(Number(num) > 9){
        let res = 1;
        for(i = 0; i < num.length; i++){
            res *= Number(num[i]);
        }
        console.log(res);
        num = String(res);
        count++;
    }
    return count;
 }

 //Unique In Order
 var uniqueInOrder=function(iterable){
    let a, arr = [];
    for(let i = 0; i < iterable.length; i++){
        if(iterable[i] !== a){
            a = iterable[i];
            arr.push(a);
        }
    }
   return arr;
}

function toCamelCase(str){
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '-' || arr[i] === '_'){
            arr.splice(i, 1);
            arr[i] = arr[i].toUpperCase();
        }
    }
    return arr.join('');
}

//Your order, please
function order(words){
    let arr1 = words.split(' '), arr2 = [];
    arr1.forEach((item, id) => {
        for(let i = 0; i < item.length; i++){
            if(Number(item[i]) != NaN){
                arr2[Number(item[i])] = item;
            }
        }
    });
    return arr2.join(' ').trim();   
}

//Does my number look big in this?
function narcissistic(value) {
    let str = String(value), newValue = 0;
    for(let i = 0; i < str.length; i++){
      let a = Number(str[i])**(str.length);
      newValue += a;
    }
    return newValue === value;
}

//Find the unique number
function findUniq(arr) {
    if(arr[0] === arr[1]){
        let a = arr[0];
        let arr1 = arr.filter((item) => {
            return item !== a; 
        });
        return arr1[0];
    } else {
        return arr[2] === arr[0] ? arr[1] : arr[0];
    }
}

console.log(findUniq([ 1, 1, 4, 1]));

//Equal Sides Of An Array
function findEvenIndex(arr)
{
    for(let i = 0; i < arr.length; i++){
        let sumR = 0, sumL = 0;
        for(let j = 0; j < i; j++){
            sumL += arr[j];
        }
        for(let k = i + 1; k < arr.length; k++){
            sumR += arr[k];
        }
        if(sumL === sumR){
            return i;
        }
    }
  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));

//Are they the "same"?
function comp(array1, array2){
    if(array1 === null || array2 === null){
      return false;
    }
    if(!array1.length && !array2.length){
      return true;
    }
      array2.sort((a,b) => a-b);
      let a1 = array1.sort((a,b) => a-b).map((item) => item * item);
      for(let i = 0; i < a1.length; i++){
          if(a1[i] !== array2[i]){
              return false;
          }
      }
      return true;
  }

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));

//Break camelCase
function solution(string) {
    let a, arr = string.split('');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i].toUpperCase()){
          arr.splice(i, 0, ' ');
          i++;
        }
    }
    return arr.join('');
}

console.log(solution("makeYoungWorld"));

//Count the smiley faces!
function countSmileys(arr) {
    let count = 0;
    arr.forEach((item) => {
        if(item[0] === ':' || item[0] === ';'){
            if(item[1] === '-' || item[1] === '~' || item[1] === ')' || item[1] === 'D'){
                if(item.length == 2){
                    count++;
                }
                if(item.length === 3){
                    if(item[2] === ')' || item[2] === 'D'){
                        count++;
                    }
                }
            } 
        }
    });
    return count;
}

console.log(countSmileys([";D" , ";->" , ";o(" , ":>" , ":~)" , ":~)" , ":)"]));

//Valid Braces
function validBraces(braces){
    let arr = braces.split(''), arr1 = [];
    let a1 = '(', a2 = ')', b1 = '{', b2 = '}', c1 = '[', c2 = ']', k = true, p = false;
    do {
        arr1 = cycle(arr);
        p = arr.length === arr1.length;
        arr = arr1;
    } while(!p);

    return arr.length? false : true;

    function cycle(arr){
        let arr1 = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === a1 && arr[i + 1] === a2){
                i += 1;
                continue;
            } 
            if(arr[i] === b1 && arr[i + 1] === b2){
                i += 1;
                continue;
            }
            if(arr[i] === c1 && arr[i + 1] === c2){
                i += 1;
                continue;
            }
            arr1.push(arr[i]);
        }
        return arr1;
    }
}

console.log(validBraces("())({}}{()][]["));

//Two Sum
function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target && i !== j){
                return [i, j];
            }
        }
    }
}

console.log(twoSum([1, 2, 3], 4));//28 19

//Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
function sumDigPow(a, b) {
    let arr = [];
    for(let i = a; i < b; i++){
        i = String(i);
        k = 0;
        for(let j = 0; j < i.length; j++){
            k += i[j] ** (j+1);
        }
        if(i === String(k)){
            arr.push(Number(i));
        }
    }
    return arr;
}

console.log(sumDigPow(10, 150));



//5 kyu



//Simple Pig Latin
function pigIt(str){
    let arr = str.split(' ').map((item) => {
        if(item !== '!' && item !== '.' && item !== '?'){
            let arr1 = item.split('');
            let a = arr1.shift();
            arr1.push(a + 'ay');
            return arr1.join('');
        }
        return item;
    });
    return arr.join(' ');
}

console.log(pigIt('Pig latin is cool !'));

//Moving Zeros To The End
function moveZeros(arr) {
    let count = 0;
    let arr1 = arr.filter((item) => {
        if(item === 0){
            count++;
            return false;
        } else {
            return true;
        }
    });
    for(let i = 0; i < count; i++){
        arr1.push(0);
    }
    return arr1;
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));

//Human Readable Time
function humanReadable (seconds) {
    let hours = seconds / 3600;
    hours = Math.trunc(hours);
    if(hours < 10) {
        hours = '0' + hours;
    }
    let minuts = (seconds % 3600) / 60;
    minuts = Math.trunc(minuts);
    if(minuts < 10) {
        minuts = '0' + minuts;
    }
    let second = ((seconds % 3600) % 60);
    second = Math.trunc(second);
    if(second < 10) {
        second = '0' + second;
    }
    return hours + ':' + minuts + ':' + second;
}

console.log(humanReadable(3599));

//Valid Parentheses
function validParentheses(parens) {
    let k = 0;
    for(let i = 0; i < parens.length; i++){
        if(parens[i] === '('){
            k++;
        }
        if(k === 0 && parens[i] === ')'){
            return false;
        }
        else {
            if(parens[i] === ')'){
                k--;
            }
        }
    }
    return k === 0 ? true : false;
}

console.log(validParentheses(")()("));

//The Hashtag Generator
function generateHashtag(str) {
    if(str === ' ' || str.trim() === ''){
      return false;
    }
    let arr = str.split(' ');
    arr = arr.filter((item) => item);
    let arr1 = arr.map((item) => {
        let arr2 = item.split('');
        arr2[0] = String(arr2[0]).toUpperCase();
        return arr2.join('');
    });
    arr1.splice(0, 0, '#');
    if(arr1.join('').length <= 140) {
        return arr1.join('');
    }
    else {
        return false;
    }
}

console.log(generateHashtag("code               wars"));

