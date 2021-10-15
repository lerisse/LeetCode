function missingNumber(nums: number[]): number {
    let sum = 0
    let range = [...Array(nums.length + 1).keys()].reduce((a, b) => a + b, 0)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return (range - sum)
};