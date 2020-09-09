/**
 * Arrays
 * All of your answers should be stored in
 * variables matching the question numbers (q1, q2, etc.)
 *
 * (e.g.) const q1 = 'my answer here';
 */

/**
 * QUESTION 1
 * Create an array literal of image sources.
 * Use image1.png, image2.png, and image3.png as the array values.
 */

 let q1 = ['image1.png', 'image2.png', 'image3.png']
//  console.log(q1)

/**
 * QUESTION 2
 * Using the array from Question 1, store the first element of the array in variable q2. Do not modify the array.
 */

let q2 = q1[0]
//  console.log(q2)

/**
 * QUESTION 3
 * Get the length (number of elements in the array) of the first array q1, and store it in variable q3
 */
let q3 = q1.length
// console.log(q3)

/**
 * QUESTION 4
 * Using the array from Question 1, store the last element of the array in variable q4. Do not modify the original array.
 * Hint: How can we get the number of elements in the array?
 */
let q4 = q1[q1.length -1]
// console.log(q4)
/**
 * QUESTION 5
 * Using the array from Question 1, add the item, image4.png to the original array.
 * Store the new array in variable q5.
 * Hint: Refer to the array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
 
q1.push('image4.png')
 
let q5 = q1

// let q5 = q1.push('image4.png')

console.log(q5)
console.log() 
/**
 * QUESTION 6
 * Using the array from Question 1, store image2.png and image3.png in a new array without modifying the original array.
 * Store the result in variable q6.
 * Hint: Refer to the array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
let q6 = q1.slice(1, 3)
// console.log(q6)
// console.log(q1)
/**
 * QUESTION 7
 * Using the array from Question 1, store image2.png and image3.png in a new array, this time modifying the original array.
 * Store the result in variable q7.
 * Hint: Refer to the array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

let q7 = q1.splice(1, 2)
// console.log(q7)
// console.log(q1)
