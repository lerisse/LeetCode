function coinChange(coins: number[], amount: number): number {
    // [1,3,4,5] -> 7 can't go greedy
    // Backtracking DFS
    const dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0
    
    for (let c of coins) {
        for (let i = 0 ; i < dp.length; i++) {
            if (c <= i) {
                let idx = i - c;
                let pAmount = dp[idx] + 1
                dp[i] = Math.min(pAmount, dp[i])
            }
        }
    }
    return dp[dp.length -1] === Infinity ? -1 : dp[dp.length -1];
};