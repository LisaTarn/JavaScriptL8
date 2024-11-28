// Part 1 Understanding and Creating Objects

let student = {
    name: "Eli",
    age: 40,
    enrolled: true,
    course: ["English ", "Math ", "French ", "Science "],
    greet: function() {
        console.log("Hello, my name is " + this.name, " my age is " + this.age, " my courses are " + this.course);
    }
};

 console.log(student.name);
 console.log(student.age);
 student.greet();

 // Part 2 Working with JSON

let jsonString = JSON.stringify(student);
console.log(jsonString);

let jsonObj = JSON.parse(jsonString);

console.log(jsonObj);

console.log(student);

// Part 3 Using Destructuring

let scores = [85, 92, 78, 90];
let [first, second, third, fourth] = scores;
console.log(first);
console.log(second);

// Part 4 The Spread Operator

let clonedStudent = {...student};

let modifiedClonedStudent = {...clonedStudent, graduationYear: 2025};
console.log(modifiedClonedStudent);

let { name, age, enrolled, course } = student;
let newCourses = ["Gym", "Programming", "Philosophy"];
let combinedCourses = [...course, ...newCourses];
console.log(combinedCourses);

// Part 5: Object Methods

let student1 = {
    name: "Eli",
    age: 40,
    enrolled: true,
    course: ["English ", "Math ", "French ", "Science "],
    addCourse: function(newCourse){
        student1.course.push(newCourse);
        return this.course;
    },
   sumCourse: function(){
    return this.course.length;

   }
};

student1.addCourse(" Philosophy");
student1.addCourse("Algebra");
student1.addCourse("Phys ed");
console.log(student1);
console.log(student1.sumCourse());

// Bonus Task

average = scores.reduce(function(sum, value) {
    return sum + value;
}, 0) / scores.length;

console.log(average);



