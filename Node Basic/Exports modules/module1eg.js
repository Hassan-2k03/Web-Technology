var m1 = require('./module1');
console.log(m1.str);
console.log(m1.Student.name);
console.log(m1.add(5,5));

var s1 = new m1.Student("xyz", 789);
console.log(s1.getDetails());
