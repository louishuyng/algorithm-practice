var generateParenthesis = function(n) {    
    const generate = function(count, value = '', result = [], mode = 0)  {
        if (count === 0) {
            if (mode === 0) result.push(`(${value})`); 
            if (mode === 1) result.push(`${value}()`); 
            if (mode === 2) result.push(`()${value}`); 
        } else if (count === n - 1) {
            result = generate(count - 1, `(${value})`, result);
        } else if (count !== 0) {
            result = generate(count - 1, `(${value})`, result);
            result = generate(count - 1, `${value}()`, result);
            
            result = generate(count - 1, `(${value})`, result, 1);
            result = generate(count - 1, `(${value})`, result, 2);

            result = generate(count - 1, `${value}()`, result, 1);
        }
       
        return result;
    }
    
    return generate(n - 1)
};
