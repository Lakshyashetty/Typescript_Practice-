interface Manager{
    markAttendence(ispresent:boolean):void;
}
class  Emp implements Manager {
    markAttendence(ispresent: boolean): void {
       if (ispresent) {
        console.log("is Present...");
        
       } else {
        console.log("is Absent...");
        
       }
    }
  
}
const e=new Emp()
e.markAttendence(true);