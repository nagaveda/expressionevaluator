
class Stack{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items.length==0)
            return "Undeflow.."
        else
            this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length==0;
    }
}
const isOperator=(f)=>{
    if(f==='+'||f==='-'||f==='*'||f==='/'||f==='%'||f==='^'){
        return true;
    }
    else
    return false;
}
var validate=(str)=>{
    var bl=-1;
    for(let i=0;i<str.length;i++){
        if((str[i]<='z'&&str[i]>='a')||(str[i]<='Z'&&str[i]>='A')||isOperator(str[i])){
            bl=0;
        } 
        else{
            bl=-1;
            break;
        }  
    }
    if(bl===0)
        return true;
    else
        return false;
}
function precedence(c){

    if(c==='^')
        return 3;
    else if(c==='*'||c==='/'||c==='%')
        return 2;
    else if(c==='+'||c==='-')
        return 1;
    else 
        return -1;
}
let isOperand=(ch)=>{
    if((ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z')){
        return true;
    }
    else
    return false;
}
let ns="";
var stack=new Stack();
stack.push('n');
var toPostfix=(s)=>{
    
        for(let i=0;i<s.length;i++){
            if(isOperand(s[i])){
                ns+=s[i];
            }
            else if(s[i]==='('){
                stack.push('(');
            }
            else if(s[i]===')'){
                while(stack.peek()!=='('){
                    let x=stack.peek();
                    stack.pop();
                    ns+=x;
                }
                stack.pop();
            }
            else{
                while(precedence(s[i])<=precedence(stack.peek())){
                    let x=stack.peek();
                    stack.pop();
                    ns+=x;
                }
                stack.push(s[i]);
            }
        }
        while(stack.peek()!=='n'){
            let x=stack.peek();
            stack.pop();
            ns+=x;
        }
        return ns;
    
    
    
}
function toPrefix(str){
    if(validate(str)){
        let s=[];
    for(let i=0;i<str.length;i++){
        s.push(str[i]);
    }
    let r=s.reverse();
    let str1="";


    for(let i=0;i<r.length;i++){
        str1+=r[i];
    }

    let v=toPostfix(str1) ;
    let a2=[];
    for(let i=0;i<str1.length;i++){
        a2.push(v[i]);
    }
    let r1=a2.reverse();
    let str2="";
    for(let i=0;i<r1.length;i++){
        str2+=r1[i];
        }
    return str2;
    }
    else{
        return "Invalid Expression..!"
    }
    
}

let input=document.getElementsByTagName("input")[0];
// let str="a+b";

let out=document.getElementById("answer");
var btn=document.getElementsByTagName("button")[0];
btn.addEventListener("click",function(){
    out.innerHTML=toPrefix(input.value);
    ns="";
})
input.addEventListener("keypress",function(k){
    if(k.keyCode===13){
        out.innerHTML=toPrefix(input.value);
        
        ns="";
    }
})

