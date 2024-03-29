/** 2469. Convert the Temperature
 * @param {number} celsius
 * @return {number[]}
 */
const convertTemperature = function(celsius) {
    const kelvin = celsius + 273.15;
    const fahrenheit = celsius * 1.80 + 32.00;
    return [kelvin.toFixed(5), fahrenheit.toFixed(5)];
};
// console.log(convertTemperature(36.50));

/** 2235. Add Two Integers
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const sum = function(num1, num2) {
    return num1 + num2;
};
// console.log(sum(5, 10));

/** 2160. Minimum Sum of Four Digit Number After Splitting Digits
 * @param {number} num
 * @return {number}
 */
const minimumSum = function(num) {
    const input = num.toString().split("").sort();
    const first = [input[0] + input[2]];
    const second = [input[1] + input[3]];
    return parseInt(first) + parseInt(second);
};
// console.log(minimumSum(4009));

/** 1342. Number of Steps to Reduce a Number to Zero
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function(num) {
    let steps = 0;
    while(num !== 0) {
        if(num % 2 === 0) {
            num = num / 2;
            steps += 1;
        } else {
            num = num - 1;
            steps += 1;
        }
    }
    return steps;
};
// console.log(numberOfSteps(14));

/** 2535. Difference Between Element Sum and Digit Sum of an Array
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum1 = 0;
    let sum2 = 0;
    let sNums = "";
    nums.forEach((value) => {
        sum1 += value;
        sNums += value;
    });
    sNums.split("").forEach((value) => {
        sum2 += parseInt(value);
    })
    return sum1 - sum2;
};
// console.log(differenceOfSum([1,2,3,4]));

/** 2520. Count the Digits That Divide a Number
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let counter = 0;
    num.toString().split("").forEach((value) => {
        if (num % parseInt(value) === 0) {
            counter += 1;
        }
    });
    return counter;
};
// console.log(countDigits(121));

/** 1486. XOR Operation in an Array
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function(n, start) {
    let res = 0;
    for (let i = 0; i < n; i++) {
        res ^= start + 2 * i;
    }
    return res;
};
// console.log(xorOperation(4, 3));

/** 1688. Count of Matches in Tournament
 * @param {number} n
 * @return {number}
 */
const numberOfMatches = function(n) {
    let sum = 0;
    while (n !== 1) {
        sum += Math.floor(n / 2);
        n = Math.ceil(n / 2);
    }
    return sum;
};
// console.log(numberOfMatches(14));

/** 1290. Convert Binary Number in a Linked List to Integer
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = function(head) {
    let binary = "";
    while (head !== null) {
        binary += head.val;
        head = head.next;
    }
    return parseInt(binary, 2);
};
// console.log(getDecimalValue([1,0,1]));

/** 1323. Maximum 69 Number
 * @param {number} num
 * @return {number}
 */
const maximum69Number  = function(num) {
    let temp = [];
    let count = true;
    num.toString().split("").map((value) => {
        if(value === "6" && count) {
            temp.push("9");
            count = false;
        } else {
            temp.push(value);
        }
    });
    return parseInt(temp.join(""));
};
// console.log((maximum69Number(9669)));

/** 2413. Smallest Even Multiple
 * @param {number} n
 * @return {number}
 */
const smallestEvenMultiple = function(n) {
    return n % 2 === 0 ? n : n * 2;
};
// console.log(smallestEvenMultiple(5));

/** 2485. Find the Pivot Integer
 * @param {number} n
 * @return {number}
 */
const pivotInteger = function(n) {
    let totalSum = 0, removedSum = 0;
    for (let i = 1; i <= n; i++) totalSum += i;
    for (let i = 1; i <= n; i++) {
        if (totalSum === removedSum + i) return i;
        totalSum -= i;
        removedSum += i;
    }
    return -1;
};
// console.log(pivotInteger(8));

/** 2427. Number of Common Factors
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const commonFactors = function(a, b) {
    const res = [1];
    const min = Math.min(a, b);
    for (let i = 2; i <= min; i++) {
        if ( a % i === 0 && b % i === 0) {
            res.push(i);
        }
    }
    return res.length;
};
// console.log(commonFactors(12, 6));