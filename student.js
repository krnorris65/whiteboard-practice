// Write a closure in JavaScript to implement a private state for a Student object that contains SSN, GPA, and Grades.
const studentInfo = function(){

    const student = {
        "ssn": null,
        "gpa": null,
        "grades": null
    }
    
    return Object.create(null, {
        "getGPA": {
            value: ()=>{
                student.gpa
            }
        }
    })





}
