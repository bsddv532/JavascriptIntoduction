//FOR var KEYWORD
// // block-scope
//  if (true) { 
//     var a = 10;
// }
// console.log(a); // accessible outside block-scope

// // function-scope
// function demo () {  
//     var b = 20;
//     console.log(b); // accessible within function-scope
// }
// demo(); // function invoked
// // console.log(b); // reference-error 




//FOR let KEYWORD
// // block-scope
// if (true) { 
//     let a = 10;     
//     a = 20;         // Re-Assignment to let variable applicable
//     let a = 20;     // syntax-error (Identifier 'a' has already been declared)
//     console.log(a);      // accessible within block-scope
// }
// // console.log(a);     // refernece-error (a is not defined)




//FOR const KEYWORD
// // block-scope
// if (true) { 
//     const a = 10; 
//     a = 20;         // type-error (Re-Assignment to constant variable)
//     const a = 20;   // syntax-error (Identifier 'a' has already been declared)
//     console.log(a); // accessible within block-scope
// }
// console.log(a);     // refernece-error (a is not defined)

