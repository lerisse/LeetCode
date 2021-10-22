function longestCommonSubsequence(text1: string, text2: string): number {
    
//     if (text1.length > text2.length) {
//         var l = text1.split("")
//         var s = text2.split("")
//     } else {
//         var l = text2.split("")
//         var s = text1.split("")
//     }
    
//     const answer = []
//     for (let i = 0; i < s.length; i++) {
//         if (l.includes(s[i])) {
//             answer.push(s[i]);
//             delete s[i];
//         }
//     }
//     return answer.length
    
  let t1 = text1.length;
  let t2 = text2.length;
  let array: number[][] = new Array(t1 + 1);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(t2 + 1).fill(0);
  }
  for (let i = 1; i <= t1; i++) {
    for (let j = 1; j <= t2; j++) {
      if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
        array[i][j] = array[i - 1][j - 1] + 1;
      } else {
        array[i][j] = Math.max(array[i - 1][j], array[i][j - 1]);
      }
    }
  }
  return array[t1][t2];
};