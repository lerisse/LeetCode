function maxArea(height: number[]): number {

// Brute Force (Doesn't pass LC, Timeout)    
//     let res = 0;
    
//     for (let l = 0; l < height.length ; l++) {
//         for (let r = l + 1; r < height.length; r++) {
//             let area = (r - l) * Math.min(height[l], height[r])
//             res = Math.max(res, area)
//         }
//     }
//     return res
    
//Shrink the bucket O(n)
    
    let res = 0;
    let l = 0 
    let r = height.length -1
    
    while (l < r) {
        let area = (r - l) * Math.min(height[l], height[r])
        res = Math.max(res, area)
        
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    
    return res
};