/*
 * 只要有一个Primise中有reject，那么Promise.all就只执行reject。
 */

var Promise = require('promise');

var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
});
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
});
var p5 = new Promise((resolve, reject) => {
    reject("reject");
});

Promise.all([p1, p2, p3, p4, p5]).then(value => {
    console.log(value);
}, reason => {
    console.log(reason)
});

//"reject"