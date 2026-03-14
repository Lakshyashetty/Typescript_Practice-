abstract class Bird{
    abstract getDetails():void;
    abstract getRole():void;
}
class Animal extends Bird{
    getDetails(): void {
        console.log("Parrot........");
        
    }
    getRole(): void {
        console.log("Dog.....");
        
    }}
    const b=new Animal()
    b.getDetails();
    b.getRole();