function execute(input) {
  const result = []

  let state = 'moveRight';
  let r = 0;
  
  let row = 0;
  let column = 0;
  let trackedPointCount = 0;

  const rowSizeInput = input[0].length;

  while(trackedPointCount !== countItems(input)) {
    console.log(result)
    if (state === 'moveRight') {
      if (column < rowSizeInput - 1 - r) {
        result.push(input[row][column])
        
        trackedPointCount++;
        column = column + 1;
      }
      else {
        state = 'moveDown';
      };
    } 
    
    if (state === 'moveDown') {
      if (row < input.length - 1 - r) {
        result.push(input[row][column])
        
        trackedPointCount++;
        row = row + 1;
      } 
      else {
        state = 'moveLeft';
      };
    } 
    
    if (state === 'moveLeft') {
      if (column > 0 + r) {
        result.push(input[row][column])
        
        trackedPointCount++;
        column = column - 1;
      }
      else if (countItems(input) - trackedPointCount !== 1) {
        r = r + 1;
        state = 'moveUp'
      } else {
        state = 'moveUp'
      };
    } 
    
    if (state === 'moveUp') {
      if (row > 0 + r) {
        result.push(input[row][column])
        
        trackedPointCount++;
        row = row - 1;
      }
      else {
        state = 'moveRight';
      };
    } 
  };

  console.log(result);
};

function countItems(input) {
  let count = 0;

  input.forEach((value) => {
    count += value.length;
  });

  return count;
};

const testData = [
  [1,2,3,4,5],
  [14,15,16,17,6],
  [13,20,19,18,7],
  [12,11,10,9,8]
];

execute(testData);
