console.log("Module1");
exports.str = "Hello world";

//object 
exports.Student = {
    name: "Abc",
    srn: 123
}

//function
exports.add = function (num1, num2) {
    return num1 + num2;
}

//export function as a class
exports.Student = class Student {
    constructor(name, srn) {
        this.name = name;
        this.srn = srn;
    }
    getDetails() {
        return this.name + " " + this.srn;
    }
}

