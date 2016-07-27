/*
 * Promise.catch只能捕获同步代码中的异常和resolve/reject执行之前抛出的异常。
 */

var Promise = require('promise');

// 在同一个上下文中捕获异常是可以的。
var p1 = new Promise(function (resolve, reject) {
    throw 'Uh-oh!';
});

p1.catch(function (e) {
    console.log(e); // "Uh-oh!"
});

// 通过setTimeout来异步抛出异常是无法触发Promise.catch的。
var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        throw 'Uncaught Exception!';
    }, 1000);
});

p2.catch(function (e) {
    console.log(e); // 不会执行
});

// 尽管这里一场被抛出了，但是Promise.catch却无法捕获。
var p3 = new Promise(function (resolve, reject) {
    resolve();
    throw 'Silenced Exception!';
});

p3.catch(function (e) {
    console.log(e); // 不会执行
});