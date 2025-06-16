// Immediately Invoked Function Expressions (IIFE)

// function chai(){
    // console.log(`DB Connected`);
// }

// chai()

// Syntax

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
    
})();
// It's basically a fumction which we don't need to call. It would function automatically on it's own
// So iife in technicality is function calling itself without any calls, by nesting itself inside a parenthesis and using a function call parenthesis.
// (In-Interview) IIFE is used to invoke a function immediately and also because of global scopes, a lot of variables and declaration pollute the code space. To get rid of that we use iife. 
// Also very importantly, you have to use semicolon coz this type of function don't know when to end

( (vers) => {
    // Unnamed IIFE
    console.log(`DB Connected ${vers}`);
}) ("20.3");



