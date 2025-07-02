var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//var msg = "Hello ts!";
//msg = 100; can't assign number since value msg has a string type recognized by type inferencing .
var msg = "Hello Typescript!"; //type annotation in ts
console.log(msg);
var age = 18;
var isRaining; //declaration
isRaining = true; //definition
var x;
x = 10;
x = "Hi";
x = [10, 20];
x = false;
function Add(x, y) {
    if (x == 0) {
        return "x=0";
    }
    console.log(x + y);
    return x + y;
}
//Add("Hello","Typescipt"); //Error!
var result = Add(10, 20);
//DEFAULT PARAMS
// function PrintBook(author?:string,title?:string,noOfPages:number=100){
//     console.log(author,title,noOfPages);
// }
// PrintBook();
// PrintBook("XYZ");
// PrintBook("Jay","how to live like a monk",300);
//rest parameter
function PrintBook(author) {
    var titles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        titles[_i - 1] = arguments[_i];
    }
    console.log(author, titles);
}
PrintBook("Jay", "Think like monk", "Life is unfair");
//classes
var Car = /** @class */ (function () {
    function Car(name, speed) {
        if (name === void 0) { name = "BMW"; }
        if (speed === void 0) { speed = 200; }
        this.name = name;
        this.speed = speed;
    }
    Car.prototype.accelerate = function () {
        return "The car " + this.name + " is running at " + this.speed;
    };
    return Car;
}());
// var carobj=new Car();
// console.log(carobj.accelerate());
var JasmesBond = /** @class */ (function (_super) {
    __extends(JasmesBond, _super);
    function JasmesBond(name, speed, canFly, canSubmerge) {
        var _this = _super.call(this, name, speed) || this;
        _this.canFly = canFly;
        _this.canSubmerge = canSubmerge;
        return _this;
    }
    JasmesBond.prototype.accelerate = function () {
        return _super.prototype.accelerate.call(this) + " Can it fly? " + this.canFly;
    };
    return JasmesBond;
}(Car));
var jbc = new JasmesBond("Aston", 200, true, true);
console.log(jbc);
console.log(jbc.accelerate());
var player = { name: "AKSHAY", sport: "Hockey" };
var Emp = /** @class */ (function () {
    function Emp() {
    }
    Emp.prototype.getSalary = function () {
        return this.salary;
    };
    return Emp;
}());
//Generics
var cars = ["BMW", "Merc"];
var cars = new Array();
var emps = new Array();
// emps[0]=100; //error as it can have only emp instances
// function swap(x:number,y:number){
//     var temp:number;
//     temp=x;
//     x=y;
//     y=temp;
// }
//allow above function to have string also (one idea is any but not efficient other is below)
function swap(x, y) {
    var temp;
    temp = x;
    x = y;
    y = temp;
    console.log(x);
    console.log(y);
}
swap(20, 30);
swap("hello", "TS");
