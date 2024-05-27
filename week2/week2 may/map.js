const input = [2,3,4,5,6];

const ans = input.map(function(i){
    return i*2;
})

console.log(ans);

//another way

const input1 = [10, 20, 30, 40, 50, 69];

// Define a transformation function that uses all three parameters
const describeElement = (element, index, array) => {
    return `Element ${element} at index ${index} in [${array.join(', ')}]`;
};

// Use the built-in map function with the describeElement transformation function
const descriptions = input.map(describeElement);

console.log(descriptions);
/*
Output:
[
  "Element 10 at index 0 in [10, 20, 30, 40, 50]",
  "Element 20 at index 1 in [10, 20, 30, 40, 50]",
  "Element 30 at index 2 in [10, 20, 30, 40, 50]",
  "Element 40 at index 3 in [10, 20, 30, 40, 50]",
  "Element 50 at index 4 in [10, 20, 30, 40, 50]"
]
*/

// filter

function filterLogic(n){
    if(n%2==0){
        return true
    }
    else {
        return false
    }
}

const ans1 = input1.filter(filterLogic);
console.log(ans1);