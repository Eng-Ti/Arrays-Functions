
//QUESTTION 1

// Mutating JavaScript Array Functions are different from Non - Mutating Functions in that they
// modify the array they are called on - instead of returning a new array with the new changes,
// the original array is changed.Non-mutating methods are those that don’t modify the array they
// are called on. If you call a non-mutating array method, the original array remains unchanged.

// The two array function methods also differ in there performance. Mutating methods tend to be
// faster than non-mutating methods, as they don’t need to create a new array.

// Some Mutator Methods in JavaScript are;
// i. array.unshift()
// ii. array.push()
// iii.  array.pop()
// iv. array.shift()
// v. array.splice()

// Some Non-Mutating Methods in JavaScript are;
// i. array.concat()
// ii. array.includes()
// iii. array.indexOf
// iv. array.join()
// v. array.lastIndexOf


//QUESTION 2


let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// i. Adding 'Kotlin' to the end of the array

languages.push('Kotlin');
console.log(languages);

// ii. Adding 'Java' after 'Ruby'

languages.splice(3, 0, 'Java');
console.log(languages);

//iii. Removing the first item in the array

languages.shift();
console.log(languages);

// iv. Adding 'Scala" and 'Swift" to the beginning of the array

languages.splice(0, 0, 'Scala', 'Swift');
console.log(languages);

// v. Replacing 'PHP' with 'Go' and 'Rust'

languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);


//QUESTION 3


let fruit = ['apple', 'mango', 'banana'];
function changeFruit(fruit) {
    fruit[2] = 'orange';
    return fruit;
}
//Calling function changeFruit

let answer = changeFruit(fruit);
console.log(answer);

// Finding the value of fruit

// Value of fruit will be orange.


//QUESTION 4


let value = [4, 5, 10, -2, 17];
function maximum(value) {
    if (toString.call(value) !== '[object Array]')
        return false;
    return Math.max.apply(null, value);
}

let max = maximum(value);
console.log(max);


//QUESTION 5


let val = [2, 6, 9, 20, 4];
function valTimesIndex(val) {
    let result = val.map((x, i) => x * i);
    return result;
}
let finalVal = valTimesIndex(val);
console.log(finalVal);


