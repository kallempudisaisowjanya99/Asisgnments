/* Assignment (Conditional Statements & Loops)

Employee Table
S.No Name Base Salary Experience (Years) Year-End Rating (Out of 5)

1 Alice Johnson 75000.0 5.1 4.2
2 Bob Smith 68000.0 3.2 3.8
3 Carol Davis 82000.0 7.1 4.5
4 David Brown 90000.0 10.2 2.5
5 Eva Green 60000.0 2.4 3.5

Hike
Rating % of base Salary as variable pay Bonus
> =4.0 15.0 1500
>=3 && < 4 10.0 1200
< 3.0 3.0 300

Extra Perks
Employees with Experience >= 5 Years get extra Reward of 5000;

There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
Values in Map with EmployeeName and HikePercentagevalue and Print them.

Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
Hike % = Hike / Base Salary . */

//Storing employee data (input)
const empData: Map<string, number[]> = new Map();
empData.set("Alice Johnson", [75000, 5, 4.2]);
empData.set("Bob Smith", [68000, 3, 3.8]);
empData.set("Carol Davis", [82000, 7, 4.5]);
empData.set("David Brown", [90000, 10, 2.0]);
empData.set("Eva Green", [60000, 2, 3.5]);


//Create empty Map to store hike percentages
const hikeMap: Map<string, number> = new Map();

// Calculate hike for each employee and store in hikeMap
for (const key of empData.keys()) {
  const data = empData.get(key)!;// get the array of values for the employee
  const baseSalary = data[0];
  const experience = data[1];
  const rating = data[2];

  const hikePercentagee = hikePercentage(baseSalary, experience, rating);
  hikeMap.set(key, hikePercentagee);
}

console.log("Hike Percentage for each employee:");
console.log(hikeMap);

function hikePercentage(baseSalary:number, experience:number, ratings:number):number{
   let variablePayPercentage = 0;
  let bonus = 0;
  let reward = 0;
  if(ratings>=4.0)
  {
    variablePayPercentage=15
    bonus=1500
  }
  else if(ratings>=3.0 && ratings<4)
  {
    variablePayPercentage=10
    bonus=1200
  }
  else 
  {
    variablePayPercentage=3
    bonus=300
  }
 if(experience>=5)
 {
    reward=5000
 }
let hike = ( baseSalary * variablePayPercentage)/100 + bonus + reward ;
return (hike / baseSalary) * 100;
}

