const obj1 = {a:true};
const obj2 = obj1;

obj1.a="boo";
delete obj1;
delete obj2;
console.log('1', obj1);
console.log('2', obj2);

