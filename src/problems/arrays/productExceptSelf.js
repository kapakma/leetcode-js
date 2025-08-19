/**
 * 238. Product of Array Except Self
 *
 * @param {number[]} nums
 * @return {number[]}
 */
export const productExceptSelf = function(nums) {
    const results = [],
        leftProd = [],
        rightProd = [];

    leftProd[0] = nums[0];
    rightProd[nums.length-1] = nums[nums.length-1];

    for (let i = nums.length-2; i >= 0; i--) {
        rightProd[i] = nums[i] * rightProd[i+1];
    }

    for (let i = 0; i < nums.length; i++) {
        let val;
        if (i === 0) {
            val = rightProd[1];
        }
        else {
            leftProd[i] = nums[i] * leftProd[i-1];

            if (i === nums.length-1) {
                val = leftProd[nums.length-2];
            }
            else {
                val = leftProd[i-1] * rightProd[i+1];
            }
        }
        results.push(val);
    }

    return results;
};
