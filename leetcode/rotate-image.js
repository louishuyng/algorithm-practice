/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const cache = {}
    
    for (i in matrix) {
        cache[i] = {}
    }
        
    for (i in matrix) {
        let index = 0;
        
        while (index < matrix[i].length) {
            let currentValue =  matrix[i][index];

            if (cache[i][index] !== undefined) {
                currentValue = cache[i][index]
            }
            
            const targetReplacePosition = (matrix.length - 1) - i;
            
            if (!cache[index][targetReplacePosition]) {
                cache[index][targetReplacePosition] = matrix[index][targetReplacePosition];
            }
            
            matrix[index][targetReplacePosition] = currentValue;
            index += 1;
        }
    }

};
