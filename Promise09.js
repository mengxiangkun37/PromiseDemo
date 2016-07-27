/*
 * 执行调用链的resolve分支。
 */

var Promise = require('promise');

Promise.resolve("Success").then(function (value) {
    console.log(value); // "Success"
}, function (value) {
    // not called
});

var p = Promise.resolve([1, 2, 3]);
p.then(function (v) {
    console.log(v[0]); // 1
});

var original = Promise.resolve(true);
var cast = Promise.resolve(original);
cast.then(function (v) {
    console.log(v); // true
});