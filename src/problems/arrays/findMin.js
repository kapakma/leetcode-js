/**
 * 153. Find Minimum in Rotated Sorted Array
 *
 * @param {number[]} nums
 * @return {number}
 */
export const findMin = function(nums) {
    return findMinHelper(nums, 0, nums.length-1);

    function findMinHelper(nums, start, end) {
        if (start < end) {
            const mid = Math.floor((start + end)/2),
                midVal = nums[mid];

            if (start <= mid-1 && midVal < nums[mid-1]) {
                return midVal;
            }

            if (mid+1 < end && midVal > nums[mid+1]) {
                return nums[mid+1];
            }

            if (midVal < nums[end]) {
                return findMinHelper(nums, start, mid-1);
            }

            return findMinHelper(nums, mid+1, end);
        }

        return nums[start];
    }
};
