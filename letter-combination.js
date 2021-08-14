/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const words = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    
    const processCombine = function(letter, numberList) {
        let result = [];
        
        if (numberList.length === 0) return result;
        
        if (numberList.length !== 1) {
            const number = Number(numberList[0]);

            result.push(
                ...processCombine(letter + words[number][0], numberList.slice(1)),
                ...processCombine(letter + words[number][1], numberList.slice(1)),
                ...processCombine(letter + words[number][2], numberList.slice(1)),
            )
            
            if (number == 7 || number == 9) {
                result.push(...processCombine(letter + words[number][3], numberList.slice(1)))
            }
        } else {
            const number = Number(numberList[0]);
            
            result = [
                letter + words[number][0],
                letter + words[number][1],
                letter + words[number][2],
            ]
            
            if (number == 7 || number == 9) {
                result.push(letter + words[number][3])
            }
        };
        
        return result;
    };
    
    return processCombine("", digits?.split("") || []);
};
