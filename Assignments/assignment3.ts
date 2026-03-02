/* Assignment -3 (Arrays/Datatypes/Operators)

1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students

Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0 */

const std:String[]= ["Suresh","Mahesh","Naresh"];
const marks: number[]=  [75, 80, 82] 
let total:number=0
const updated_marks: number[]=[];

console.log("Updated Marks:")

for(let i=0 ; i<marks.length; i++){
 updated_marks[i]= marks[i]+10;
 total += updated_marks[i];
 console.log(`${std[i]} : ${updated_marks[i]}`)
}

const avg: number= total/marks.length

console.log(`Avg marks: ${avg}`)