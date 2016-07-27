/*
 * 只要执行链中有异常发生，那么就直接跳转到Promise.catch。不再执行中间的then节点。
 * 这里注意的是，如果发生异常的then和Promise.catch之间的then有reject处理，那么catch将不会执行。
 */

var Promise = require('promise');

var p1 = new Promise(function (resolve, reject) {
    resolve('Success');
});

p1.then(function (value) {
    console.log(value); // "Success!"
}).then(function (value) {
    console.log("Two"); // "Two!"
    throw 'oh, no!'; // 或者 return Promise.reject('oh, no!');
}).then(function(a){
    console.log('Not fired when catch Error!');
},function(e){
    console.log("reject error");
}).catch(function (e) {
    console.log(e); // "oh, no!"
}).then(function () {
    console.log('after a catch the chain is restored');
}, function () {
    console.log('Not fired due to the catch');
});