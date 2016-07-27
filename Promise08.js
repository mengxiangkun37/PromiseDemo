/*
 * 执行调用链的reject分支。
 */

var Promise = require('promise');

Promise.reject("Testing static reject").then(function (reason) {
    // not called
}, function (reason) {
    console.log(reason); // "Testing static reject"
});

Promise.reject(new Error("fail")).then(function (error) {
    // not called
}, function (error) {
    console.log(error); // Stacktrace
});