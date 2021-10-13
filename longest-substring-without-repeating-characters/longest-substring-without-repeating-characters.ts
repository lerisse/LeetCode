function lengthOfLongestSubstring(s: string): number {
    let i = 0; 
    let j = 0; 
    let max = 0;
    
    const hashSet = new Set()
    
    while (j < s.length) {
        if (!hashSet.has(s.charAt(j))){
            hashSet.add(s.charAt(j));
            j++;
            if (max < hashSet.size) {
            max = hashSet.size
        }
        } else {
            hashSet.delete(s.charAt(i))
            i++;
        }
    }

    return max;
    
}