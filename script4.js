class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
  
    // Functions to be implemented 
    // push(item) 
    push(element) 
{ 
    // push element into the items 
    this.items.push(element); 
} 
    // pop() 
    pop() 
{ 
    // return top most element in the stack 
    // and removes it from the stack 
    // Underflow if stack is empty 
    if (this.items.length == 0) 
        return "Underflow"; 
    return this.items.pop(); 
} 
    // peek() 
    peek() 
{ 
    // return the top most element from the stack 
    // but does'nt delete it. 
    return this.items[this.items.length - 1]; 
} 
    // isEmpty() 
    isEmpty() 
{ 
    // return true if stack is empty 
    return this.items.length == 0; 
} 
    // printStack() 
} 



// Performs Postfix Evaluation on a given exp 
function postFixEvaluation(exp) 
{ 
	var stack = new Stack(); 
	for (var i = 0; i < exp.length; i++) { 
		var c = exp[i]; 
		if (!isNaN(c)) 
			stack.push(c - '0'); 
		else { 
			var val1 = stack.pop(); 
			var val2 = stack.pop(); 
			if (val1 == "Underflow" || val2 == "Underflow") 
				return "Invalid Expression.!"; 
			switch (c) { 
			case '+': 
				stack.push(val2 + val1); 
				break; 

			case '-': 
				stack.push(val2 - val1); 
				break; 

			case '/': 
				stack.push(val2 / val1); 
				break; 

			case '*': 
				stack.push(val2 * val1); 
				break; 
			} 
		} 
	} 

	return stack.pop(); 
} 

var pf=document.getElementsByTagName("input")[0];
var ev=document.getElementById("answer");
var btn=document.getElementsByTagName("button")[0];
btn.addEventListener("click",function(){
    ev.innerHTML=postFixEvaluation(pf.value);
})
pf.addEventListener("keypress",function(k){
    if(k.keyCode===13){
        // console.log(postFixEvaluation(pf.value));
        ev.innerHTML=postFixEvaluation(pf.value);
    }
})