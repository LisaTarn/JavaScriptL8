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

