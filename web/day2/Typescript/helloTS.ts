
//var msg = "Hello ts!";
//msg = 100; can't assign number since value msg has a string type recognized by type inferencing .
var msg:string = "Hello Typescript!"//type annotation in ts
console.log(msg);
var age: number = 18;
var isRaining: boolean;//declaration
isRaining = true;//definition
var x;//any type
x = 10;
x = "Hi";
x = [10,20];
x = false;
function Add(x:number, y:number):number|string{
    if(x==0){
        return "x=0";
    }
    console.log(x+y);
    return x+y;
}

//Add("Hello","Typescipt"); //Error!
var result: number | string =Add(10,20);

//DEFAULT PARAMS
// function PrintBook(author?:string,title?:string,noOfPages:number=100){
//     console.log(author,title,noOfPages);
// }
// PrintBook();
// PrintBook("XYZ");
// PrintBook("Jay","how to live like a monk",300);


//rest parameter
function PrintBook(author:string,...titles:string[]):void{
    console.log(author,titles);
}
PrintBook("Jay","Think like monk","Life is unfair")

//classes
class Car{
    private id:number;
    name:string;
    speed:number;

    constructor(name="BMW",speed=200){
        this.name=name;
        this.speed=speed;
    }
    accelerate():string{
        //return "The car "+this.name+" is running at "+this.speed;
        return `The car ${this.name} is running at ${this.speed}`; //string template 
    }
}
// var carobj=new Car();
// console.log(carobj.accelerate());

class JasmesBond extends Car{
    canFly:boolean;
    canSubmerge:boolean;
    constructor(name:string,speed:number,canFly:boolean,canSubmerge:boolean){
        super(name,speed);
        this.canFly=canFly;
        this.canSubmerge=canSubmerge
    }
    accelerate(): string {
        return super.accelerate()+" Can it fly? "+this.canFly;
    }
}

var jbc=new JasmesBond("Aston",200,true,true);
console.log(jbc);
console.log(jbc.accelerate());



//no virtual keyword no override keyword


//interface
// interface IPlayer{ //use for inheritance
//     name:string;
//     sport:string;
// }

type IPlayer={ //type is use to check structure (interface used to take care but now type does)(notuse for inheritance)
    name:string;
    sport:string;
}
var player:IPlayer={name:"AKSHAY", sport:"Hockey"};


interface IEmployee{ //define a contract and these r binding u need to use and implement
    name:string;
    salary:number;
    getSalary?:()=>number;
}
class Emp implements IEmployee{
    name:string;
    salary:number;
    getSalary(): number{
        return this.salary;
    }
}

//Generics
var cars:string[]=["BMW","Merc"];
var cars:Array<string>=new Array<string>();

var emps:Array<Emp>=new Array<Emp>();
// emps[0]=100; //error as it can have only emp instances



// function swap(x:number,y:number){
//     var temp:number;
//     temp=x;
//     x=y;
//     y=temp;
// }
//allow above function to have string also (one idea is any but not efficient other is below)

function swap<T>(x:T,y:T){
    var temp:T;
    temp=x;
    x=y;
    y=temp;
    console.log(x);
    console.log(y);
}

swap<number>(20,30);
swap<string>("hello","TS");


class Point<T,V>{
    x:T;
    y:V;
}
var pointToBeNoted=new Point<number,string>();
pointToBeNoted.y;


