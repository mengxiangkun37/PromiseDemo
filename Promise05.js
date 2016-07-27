/*
 * then调用链，可以一直传递下去。
 */

var Promise = require('promise');

var p1 = new Promise(function (resolve, reject) {
    // resolve("Success!");
    // or
    reject ("Error!");
});

p1.then(function (value) {
    console.log("resolve:"+value); // Success!
}, function (reason) {
    console.log("reject:"+reason); // Error!
    return Promise.reject("reject fired");
}).then(function (value) {
    console.log("resolve:"+value); // Success!
}, function (reason) {
    console.log("reject:"+reason); // Error!
    return Promise.resolve("resolve fired");
}).then(function (value) {
    console.log("resolve:"+value); // Success!
}, function (reason) {
    console.log("reject:"+reason); // Error!
});