// Behind the scenes work of javascript

// Let's see an example

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

/*

Two basic stuff happens: 1) Execution context; 2) Calls stack
EC (excution context)
It is exactly as the name suggests, it is the context of the excution of the code.
Three types, mainly two but since we are learning in depth so might as well. 1)Global EC; 2)Function EC; 3)Eval EC
Global EC is created automatically when you start the js. it stores all the environment data like all the global objects and variables.
Function EC is created everytime a function is invoked, hence the name. I love it naming make sense, duh.
Eval EC is created in eval() which is ofc rare

Now, What happens when we run the code above? A seiries of operations will happen. Before anything global ec will get stored in .this and then everything will happen in two phases. 1 - Memory creation phase; 2 - Execution Phase

Memory creation phase or memory phase is where all the variables and the function and it's definition is allocated a memory location but they are not assigned values. (undefined)
Execution phase is where the value is assigned to the variables. But everytime a function is called it creates a new variable and thus it goes through both those phase again. 
It happens evrytime a function is called.
So that means in the context of the code above line 8 will trigger a new variable execution environment and an execution thread. Same will happen in line 13 amd 14 too. Once it's done NVE will get deleted.

>> Now What is call stack? 
- We already know about the stack memory, then all we need to know is, it is a stack memory for calls. It stores calls and releases them in order of FILO (first in last out).
Which ofc means that in the case of the code above, line 13 and 14 will run first then it will reference to line 8 to 11, so that will run next an dthen finally line 5 and 6. Coz that is where the value was declared and it was reffered by the function in line 13. And I know this seems confusing but is not since function in line 13 and 14 has diferent execution environment wich will run simulteneously. Hope that explains everything. And I did not include Global EC because it is there always in the beggining 

*/