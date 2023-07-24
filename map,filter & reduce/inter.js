// Q1. Return only name of the students in Capital


let students = [
    {name: "Aastha", rollNumber: 1, marks: 92},
    {name: "Bhavya", rollNumber: 2, marks: 95},
    {name: "Max", rollNumber: 5, marks: 28},
    {name: "Nashra", rollNumber: 10, marks: 82},
    {name: "Yash", rollNumber: 11, marks: 19},
    {name: "Xed", rollNumber: 12, marks: 79},
]


// using for loop  method
let names = [];
for (let i = 0; i < students.length; i++) {
    names.push(students[i].name.toUpperCase());
    
}

console.warn(names)



// Using map() method
const Names = students.map((stu) => stu.name.toUpperCase())

console.log(Names)

// Q2  Return only names of those who scored more than 80 marks

// using  for loop with Filter() method

let mark = []
for (let i = 0; i < students.length; i++) {
    if(students[i].marks > 80) (mark.push(students[i].name.toLowerCase()))
    
}

console.warn(mark)

// Q3  Return only names of those who scored more than 20 marks

let details = students.filter((stu) => stu.marks > 20);

console.log(details)

// Q4  more than 60 marks and rollnumber greater than 10


let detailsNew = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 10);

console.log(detailsNew);

// Q5 SUM of marks of all students

const Newsum = students.reduce((acc, curr) => acc + curr.marks, 0);
console.error(Newsum)

// Q6   Return only names of those who scored more than 60 marks

let NEwnames = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);

console.log(NEwnames);