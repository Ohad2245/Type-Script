// OOP - Object Oriented Programing
// OOP - about creating objects that contain both data & functions.
 // The main goal fo OOP - is to simulate the real world objects
 // OOP - is faster and easire to execute



 // Create a template:
 class Tiger{

     // Properties (מאפיינים)
     public Age:number;

     //Methods:
     Run(km:number):string{
         return `This tiger runs: ${km} km per day`;
     }
 }
// Create an instance of class Tiger:
 let t1:Tiger = new Tiger();
 t1.Age = 3;

 let t2:Tiger = new Tiger();
 t2.Age = 10;

 // Access properties of the objects:
console.log(t1.Age);
console.log(t2.Age);

// Accses methods:
console.log(t1.Run(10));
console.log(t1.Run(20));








