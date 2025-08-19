/**
 * 152. Maximum Product Subarray
 *
 * @param {number[]} nums
 * @return {number}
 */
export const maxProduct = function(nums) {
    const dpMax = new Array(nums.length),
        dpMin = new Array(nums.length);

    let maxProd = dpMax[0] = dpMin[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        dpMax[i] = Math.max(num, dpMax[i-1] * num, dpMin[i-1] * num);
        dpMin[i] = Math.min(num, dpMax[i-1] * num, dpMin[i-1] * num);
        maxProd = Math.max(maxProd, dpMax[i]);
    }

    return maxProd;
};
