var Course = /** @class */ (function () {
    function Course(courseName, courseCode, instructor) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instructor;
    }
    return Course;
}());
var c = new Course("Javascript", 101, "Ajay sir");
console.log(c);
