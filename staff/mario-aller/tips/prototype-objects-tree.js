console.dir(document.querySelector('h1'))

var h1 = document.querySelector('h1')
h1.__proto__.constructor
// ƒ HTMLHeadingElement() { [native code] }
h1.__proto__.__proto__.constructor
// ƒ HTMLElement() { [native code] }
h1.__proto__.__proto__.__proto__.constructor
// ƒ Element() { [native code] }
h1.__proto__.__proto__.__proto__.__proto__.constructor
// ƒ Node() { [native code] }
h1.__proto__.__proto__.__proto__.__proto__.__proto__.constructor
// ƒ EventTarget() { [native code] }
h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.constructor
// ƒ Object() { [native code] }
h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.constructor
// VM187:1 Uncaught TypeError: Cannot read properties of null (reading 'constructor')
//     at <anonymous>:1:74
// (anonymous) @ VM187:1

var p = document.querySelector('p')
p.__proto__.constructor
// ƒ HTMLParagraphElement() { [native code] }
p.__proto__.__proto__.constructor
// ƒ HTMLElement() { [native code] }
p.__proto__.__proto__.__proto__.constructor
// ƒ Element() { [native code] }
p.__proto__.__proto__.__proto__.__proto__.constructor
// ƒ Node() { [native code] }
p.__proto__.__proto__.__proto__.__proto__.__proto__.constructor
// ƒ EventTarget() { [native code] }
p.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.constructor
// ƒ Object() { [native code] }
p.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.constructor
// VM257:1 Uncaught TypeError: Cannot read properties of null (reading 'constructor')
//     at <anonymous>:1:73


