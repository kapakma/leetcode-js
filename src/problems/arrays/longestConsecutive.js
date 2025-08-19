/**
 * 128. Longest Consecutive Sequence
 * 
 * @param {number[]} nums
 * @return {number}
 */
export const longestConsecutive = function(nums) {
    if (!nums.length) {
        return 0;
    }
    
    nums.sort((a,b) => a - b)
    nums = [...new Set(nums)];
    let start = 0, end = 1,
        maxLen = 1, len = 1;
    
    while (end < nums.length) {
        const num1 = nums[start],
            num2 = nums[end];
        
        if (num1 + 1 == num2) {
            len++;
            maxLen = Math.max(maxLen, len);
            start++;
            end++;
        }
        else {
            len = 1;
            start = end;
            end++;
        }
    }
    
    return maxLen;
};
