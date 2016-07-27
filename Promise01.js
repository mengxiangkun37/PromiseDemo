/*
 * Promise.all会等待所有参数内的Promise对象完成，或者接受到第一个reject。一旦接受到reject就只执行reject。
 */

var Promise = require('promise');

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then(values => {
    console.log(values); // [3, 1337, "foo"] 
}).then(function () {
    console.log('Done');
});