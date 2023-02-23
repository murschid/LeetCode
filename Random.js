class Random {
	/**
	 * 1. Two Sum
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	twoSum(nums, target) {
		let number = [];
		for (i = 0; i < nums.length; i++) {
			for (j = i + 1; j < nums.length; j++) {
				if ((nums[i] + nums[j]) == target) {
					number.push(i, j);
				}
			}
		}
		return number;
	}

	/**
	 * 11. Container With Most Water
	 * @param {number[]} height
	 * @return {number}
	 */
	mostWater(height) {
		let result = 0;
		let length = height.length;
		for (i = 0; i < length; i++) {
			for (j = i + 1; j < length; j++) {
				let tempRes = Math.min(height[i], height[j])
				tempRes = tempRes * (j - i);
				result = Math.max(result, tempRes);
			}
		}
		return result;
	}

	/**
	 * 11. Container With Most Water
	 * @param {number[]} arr
	 * @return {number}
	 */
	mostWaterOptimized(arr) {
		let first = 0;
		let last = arr.length - 1;
		let totalWater = 0;
		while (first < last) {
			let height = Math.min(arr[first], arr[last]);
			let width = last - first;
			let currentWater = height * width;
			totalWater = Math.max(currentWater, totalWater);
			arr[first] <= arr[last] ? first++ : last--;
		}
		return totalWater;
	}

	/**
	 * 1. Two Sum
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	twoSumOptimized(nums, target) {
		for (let i = 0; i < nums.length; i++) {
			let remain = target - nums[i];
			for (let j = i + 1; j < nums.length; j++) {
				if (remain === nums[j]) {
					return [i, j];
				}
			}
		}
		return -1;
	}
}

const random = new Random();
export default random;