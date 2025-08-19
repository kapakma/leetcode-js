/**
 * 88. Merge Sorted Array
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export const merge = function(nums1, m, nums2, n) {
    let i1 = 0,
        i2 = 0;

    while (i1 < m && i2 < n) {
        if (nums1[i1] > nums2[i2]) {
            shiftArray(nums1, i1);
            nums1[i1] = nums2[i2];
            i2++;
            m++;
        }
        i1++;
    }

    while (i2 < n) {
        nums1[i1++] = nums2[i2++];
    }

    function shiftArray(arr, start) {
        for (let j = arr.length-1; j > start; j--) {
            arr[j] = arr[j-1];
        }
        return arr;
    }
};
