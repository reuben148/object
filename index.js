/*practice 1
1.Define an array numbers
2.Use array destructuring with the rest operator to seperate
the first two elements into a and b, and the remaining elememts to rest
3.log the reslts
 */
// solution
const numbers = [2, 4, 6, 8, 10];
const[a, b,...rest] = numbers;


/*practice 2
1. in math.js (export files):
    define two objects 'add' and 'substract'.
    use export to export them.
2. in main.js (import files):
    import the function in 'math.js'.
    use them in the code
 */
// solution
import {sum , substraction} from "./main.js"

console.log(sum (5,6));
console.log(substraction(8, 6));


/*practice 3
1. Define two arrays Arr1 and Arr2.
2. use the spread operator... to combine them into a new array, combinedArray.
3. log or return the combinedArray.
 */
// solution
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

const combinedArray = [...arr1,...arr2];
console.log(combinedArray);


/*practice 4
1. Define a function sumNumbers.
2. Use the rest ... operator in the function's parameter to collect
all the arguments into the array
3. use the reduce method to calculate the sum of the numbers
 */
// solution
function sumNumbers (...nunbers){
    return numbers.reduce((sum, num)=> sum + num,0);
}
console.log(sum(1,7,8));



/*practice 5
1. Define the rectangle class.
2.Add a constructor to initialize width and height
3. Define a getArea() method that calculates the area (width * height).
4. create and instance of rectangle and call the getArea.
 */
// solution
class rectangle {
    constructor(height, width){
        this.height = height
        this.width = width
    }
    getArea(){
        return this.width * this.height;
    }
}

const rectangle1 = new rectangle(10,12);

console.log(rectangle1.getArea());


/* Practice 8
1. Define the function swap
2. Use array destructuring to swap x and z.
3. log or return the swap values.
 */
// solution
let x = 30;
let z = 10;

[x, z] = [z, x];

console.log(x, z);

