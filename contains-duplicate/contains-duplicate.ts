function containsDuplicate(nums: number[]): boolean {
    let h = {}
    for (let i = 0; i < nums.length; i++) {
        if (h[nums[i]]) {
            return true
        } else {
            h[nums[i]] = true
        }
    }
    return false
};