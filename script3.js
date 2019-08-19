var operators = {
    '+': function(a, b) {
      return a + b;
    },
    '-': function(a, b) {
      return a - b;
    },
    '*': function(a, b) {
      return a * b;
    },
    '/': function(a, b) {
      return a / b;
    },
  };
  var precedence = [
    ['*', '/'],
    ['+', '-']
  ]
  
  function evalPrefix(input, variable) {
    // process at this level
    // return the result of this level and what we didn't use
    // return a null value if we fail at any point
    function step(current) {
      // directly return numbers
      if (!isNaN(parseFloat(current[0]))) {
        return {
          value: parseFloat(current[0]),
          rest: current.slice(1)
        };
      }
  
      // otherwise, we're going to have to recur
      else {
        var f = operators[current[0]];
  
        // recur for left, use that rest for right
        var left = step(current.slice(1));
        if (left.value == null) return {
          value: null,
          rest: []
        };
        var right = step(left.rest);
        if (right.value == null) return {
          value: null,
          rest: []
        };
  
        // return at my level
        return {
          value: f(left.value, right.value),
          rest: right.rest
        };
      }
    }
    return step(input).value;
  }

  var pf=document.getElementsByTagName("input")[0];
  var ans=document.getElementById("answer");
  var btn=document.getElementsByTagName("button")[0];
  btn.addEventListener("click",function(){
      ans.innerHTML=evalPrefix(pf.value);
  })
  pf.addEventListener("keypress",function(k){
      if(k.keyCode===13){
            ans.innerHTML=evalPrefix(pf.value);
      }
  })