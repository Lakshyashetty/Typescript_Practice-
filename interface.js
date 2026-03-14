var Emp = /** @class */ (function () {
    function Emp() {
    }
    Emp.prototype.markAttendence = function (ispresent) {
        if (ispresent) {
            console.log("is Present...");
        }
        else {
            console.log("is Absent...");
        }
    };
    return Emp;
}());
var e = new Emp();
e.markAttendence(true);
