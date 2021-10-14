function maxSubArray(nums: number[]): number {
    let maxSub = nums[0]
    let currentSum = 0
    
        nums.map((n) => {
        if (currentSum < 0) {
            currentSum = 0
        }
        currentSum += n
        maxSub = Math.max(maxSub, currentSum)
    })
    return maxSub
};