/** 1920. Build Array from Permutation
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function(nums) {
    let ans = [];
    nums.forEach((value, index) => {
        ans.push(nums[nums[index]]);
    });
    return ans;
};
// console.log(buildArray([0,2,1,5,3,4]));

/** 1929. Concatenation of Array
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = function(nums) {
    return nums.concat(...nums);
};
// console.log(getConcatenation([1,3,2,1]));

/** 1470. Shuffle the Array
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
    let ans = [];
    for (let i = 0; i < n; i++) {
        ans.push(nums[i], nums[i+n]);
    }
    return ans;
};
// console.log(shuffle([1,2,3,4,4,3,2,1], 4));

/** 2011. Final Value of Variable After Performing Operations
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function(operations) {
    let x = 0;
    for (let i = 0; i < operations.length; i++) {
        if(operations[i] === "++X" || operations[i] === "X++") {
            x += 1;
        } else {
            x -= 1;
        }
    }
    return x;
};
// console.log(finalValueAfterOperations(["++X","++X","X++"]));

/** 2574. Left and Right Sum Differences
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRigthDifference = function(nums) {
    const size = nums.length;
    const leftSum = [0];
    const rightSum = [];
    const res = [];
    
    for (let i = 0; i < size - 1; i++) {
        leftSum.push(leftSum[i] + nums[i]);
    }
    let temp = 0;
    for (let j = size - 1; j > 0 ; j--) {
        rightSum.push(temp += nums[j])
    }
    rightSum.reverse();
    rightSum.push(0);

    for (let k = 0; k < size; k++) {
        res.push(Math.abs(leftSum[k] - rightSum[k]));
    }
    return res;
};
// console.log(leftRigthDifference([10,4,8,3]));

/** 1512. Number of Good Pairs
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function(nums) {
    let ans = 0;
    const size = nums.length;

    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            if (nums[i] === nums[j]) {
                ans += 1;
            }
        }
    }
    return ans;
};
// console.log(numIdenticalPairs([1,1,1,1]));

/** 26. Remove Duplicates from Sorted Array
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    nums.splice(0, nums.length, ...(new Set(nums)));
};
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

/** 1108. Defanging an IP Address
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
    return address.split(".").join("[.]");
};
// console.log(defangIPaddr("1.1.1.1"));