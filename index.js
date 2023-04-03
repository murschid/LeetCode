// console.log('Welcome in LeetCode problem solving...\n');
// import programmingSkillsOne from './ProgrammingSkillsOne.js'
// import random from './Random.js'

// console.log(random.twoSumOptimized([4, 5, 6, 7, 9], 13));

	const findTheDifference = function(s, t) {
		let newS = s.split("");
		let obj = {};
		for (let i = 0; i < s.length; i++) {
			obj[s[i]] = s[i];
		}
		for (let j = 0; j < t.length; j++) {
			if (!obj.hasOwnProperty(t[j])) {
				return t[j];
			}
		}
	};
console.log(findTheDifference("abcd", "abcdeb"));