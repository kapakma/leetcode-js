/**
 * 53. Maximum Subarray
 *
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubArray = function(nums) {
    const dp = new Array(nums.length);
    let max = dp[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        dp[i] = Math.max(num, dp[i-1] + num);
        max = Math.max(max, dp[i]);
    }
    return max;
};
