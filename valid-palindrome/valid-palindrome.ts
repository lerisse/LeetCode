function isPalindrome(s: string): boolean {
    let punctuationStrip = s.replace(/[^0-9a-z]/gi, '');
    let finalString = punctuationStrip.replace(/\s{2,}/g," ").split(" ").join('').toLowerCase();
    
    console.log(finalString)
    
    return (finalString.split("").reverse().join("") === finalString)
    
};