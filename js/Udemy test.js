function sameFrequency(first, second) {
 
    // get the number of their digits
    const firstLen = Math.floor(Math.log10(first)) + 1;
    const secondLen = Math.floor(Math.log10(second)) + 1;
     
    if (firstLen !== secondLen) {
        return false;
    }
     
    let freqCounter = {};
    for (let digitPos = 0; digitPos < firstLen; ++digitPos) {
        let digit = Math.floor(first / Math.pow(10, digitPos)) % 10;
        freqCounter[digit] = freqCounter[digit] + 1 || 1;
    }
    for (let digitPos = 0; digitPos < secondLen; ++digitPos) {
        let digit = Math.floor(second / Math.pow(10, digitPos)) % 10;
        if (!freqCounter[digit]) {
            return false;
        }
        freqCounter[digit]--;
    }
    return true;
     
    }
document.getElementById("result").value = sameFrequency(1234567, 7622221);