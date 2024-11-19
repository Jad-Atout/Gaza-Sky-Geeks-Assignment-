//Task5
// this function receives a string and by using regex it decides whether it valid or not
function isValidEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com/;
    return regex.test(email);
}
console.log(isValidEmail("user@example.com"));
console.log(isValidEmail("user@domain"));
console.log(isValidEmail("user@.com"));
// to compile  tsc product.ts
// to run      node product.js
