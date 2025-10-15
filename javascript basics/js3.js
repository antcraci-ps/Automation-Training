var marks = Array (1, 2, 3, 4, 5)

var marks = [11, 22, 33, 44, 55] // you can either use Array or []

console.log(marks[2]) // outputs the value for index2 which is 33

marks[2] = 33333 // changes the value for index2

console.log(marks)

console.log(marks.length) // outputs the lenght of the array which is 5

marks.push(66) // adds a new element to the end of the array
console.log(marks)

marks.pop()
console.log(marks)

marks.unshift(0) // adds element at the begining of the array
console.log(marks)

console.log(marks.indexOf(44)) // outputs the index of any element

console.log(marks.includes(999999)) // check if the specified element is prezent in the array

submarks = marks.slice(2,5) //used to create a sub array with the values specified by the indexes // the value of the first index will be included in the new array and the value of the second index will be excluded
console.log(submarks)
var sum = 0
console.log("********************")
for (let i = 0; i < marks.length; i++)
{
    console.log(marks[i])
    sum = sum + marks[i]
}
console.log(sum)

console.log("********************")

let total = marks.reduce((sum,mark)=>sum+mark,0) // outputs the total sum of the elements from an array
console.log(total)

console.log("********************")
// create a new array with only even numbers from the mentioned array and multiply each value by 3 and sum them
var scores = [11,22,33,44,55,66,77,88,99]
var evenScores = []
for(let i = 0; i < scores.length; i++)
{
    if(scores[i] %2 == 0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

console.log("********************")

let newEvenNumbersArray = scores.filter(score => score % 2 == 0) // easy way to filter the even numbers from an array
console.log(newEvenNumbersArray)

console.log("********************")

// using map function for array to multiply all the values from the previous array
let newMapArray = newEvenNumbersArray.map(score => score * 3)
console.log(newMapArray)

let totalSumMapArray = newMapArray.reduce((sum,val)=>sum+val,0)
console.log(totalSumMapArray)