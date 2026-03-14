class Course{
    courseName:string
    courseCode:number
    instructor:string

    constructor(courseName: string,courseCode: number,instructor: string){
this.courseName=courseName;
this.courseCode=courseCode;
this.instructor=instructor
    }
}
const c=new Course("Javascript",101,"Ajay sir")
console.log(c);