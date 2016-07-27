/*
 * 通过return向调用链后面的then传递参数
 */

var Promise = require('promise');

var p2 = new Promise(function (resolve, reject) {
    resolve(1);
});

p2.then(function (value) {
    console.log(value); // 1
    return value + 1;
}).then(function (value) {
    console.log(value); // 2
});

p2.then(function (value) {
    console.log(value); // 1
});