/**
 * 11. Container With Most Water
 *
 * @param {number[]} height
 * @return {number}
 */
export const maxArea = function(height) {
    let maxArea = 0,
        left = 0,
        right = height.length - 1;

    while (left < right) {
        const w = right - left,
            h = Math.min(height[left], height[right]),
            area = w * h;

        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }

    return maxArea;
};
