/*
 * 设置调用链的执行对象，抛出异常
 */

var Promise = require('promise');

// 设置后续调用链的then对象。
var p1 = Promise.resolve({
    then: function (onResolve, onReject) { onResolve("onResolve!");onReject("onReject!"); }
});
console.log(p1 instanceof Promise) // true, a Promise Object

p1.then(function (v) {
    console.log(v); // "onResolve!"
}, function (e) {
    console.log(e); // 没执行
});

// 抛出异常拦截调用链。
var thenable = {
    then: function (resolve) {
        throw new TypeError("Throwing1");
        resolve("Resolving");
    }
};

var p2 = Promise.resolve(thenable);
p2.then(function (v) {
    // 没执行
}, function (e) {
    console.log(e); // 截获异常，导致catch没执行
}).catch(function(e){
    console.log(e.message);
});

// 在向下传递之后抛出异常，异常没有被截获。
var thenable = {
    then: function (resolve) {
        resolve("Resolving");
        throw new TypeError("Throwing2");
    }
};

var p3 = Promise.resolve(thenable);
p3.then(function (v) {
    console.log(v); // "Resolving"
}, function (e) {
    // not called
}).catch(function(e){
    console.log(e);
});