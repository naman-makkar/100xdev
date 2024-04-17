// callback

console.log("hello");

function calculate(a,b, calculatefunction) {
    const ans = calculatefunction(a,b)
    return ans; 
}

function sum(a,b) {
    return a+b;
}

const value = calculate(1,2,sum);
console.log(value);

// setTimeout(greet, 3*1000) 

//assignment lec - 1.2
// question 1
// function countdown() {
//     let counter = 30;

//     function updatecounter() {
//         console.log(counter);

//         if(counter>0) {
//             counter--;
//             setTimeout(updatecounter, 1000);
//         }
//         else{
//             console.log("complete");
//         }
//     }
//     updatecounter();
// }
// countdown();

//question 2
function measureTime() {
    const startTime = Date.now();
  
    setTimeout(() => {
      const endTime = Date.now();
      const elapsedTime = endTime - startTime;
      console.log(`Time elapsed: ${elapsedTime} milliseconds`);
    }, 2000); // Example timeout: 2000 milliseconds
  }
  
  measureTime();
  