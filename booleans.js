function negate(a) {
  // your code here
let x='';
if (!a ) {
  x = false
}
if (!a) {
  x=true
}
};

function both(a, b) {
  // your code here
  let x = "";
  if (a === true & b === true) {
    x = true;
    if (a === false & b === false) {
      x = false;
    }
    else if (alert = "invalid" );
  


function either(a, b) {
  let x = "";
  if (a === true && b === true) {
    x = true
   if ( a=== true && b === false) {
      x = true }
}
   if (a === false && b === true) {
  x = true;
} if (a === false && b === false) {
  x = false;
}
};

function none(a, b) {
  // your code here
let x = '';
if ( a === true && b ===true) {
  x = false; 
  if (a === true && b === false) {
    x = false;
    if(a ===false && b === true) {
      x =false;
      if (a === false && b === false) {
        x = true;
      }
    }
  }
}
};

function one(a, b) {
  // your code here
let x = '';
if ( a === true || b === true) {
  x = false;
}
if ( a === true || b === false){
  x = true;
}
if (a === false || b === true) {
  x = true;
}
if (a === false || b === false) {
  x = false;
}
};

function truthiness(a) {
  // your code here
  let x = '';
  if ('') {
    x = false;

  }
  if ('dbbd') {
    x = true;
    
  }
  if (0) {
    x = false;
    
  }
  if (3) {
    x = true;
    
  }
  if ([]) {
    x = true;
    
  }
  if ({}) {
    x = true;
    
  }
  if (null) {
    x = false;
    
  }
  if (undefined) {
    x = false;
    
  }
  if (NaN) {
    x = false;
    
  }
};

function isEqual(a, b) {
  // your code here
  let x ='';
  if (a == b){
    x = true;
  }
  else if (!(a == b)) {
    x = false;
  }
};

function isGreaterThan(a, b) {
  // your code here
  let x = '';
  if (a > b) {
    x =true;
  }
  else if (!(a>b))
  return x = false;
};

function isLessThanOrEqualTo(a, b) {
  // your code here
  let x = '';
  if (a <= b){
    x = true;
  }
  else if (!(a <= b))
  return x = false;
};

function isOdd(a) {
  // your code here
  let x = '';
  if (!(a % 2 == 0)){
    x = true;
  }
  else return x = false;
};

function isEven(a) {
  // your code here
  let x = '';
  if (a % 2 == 0) {
    x = true;
  }
  else return x = false;
};
};

function isSquare(a) {
  // your code here
  let x ='';
  if (!(a < 0)) {
    x = true
  }
  else return x = false

};

function startsWith(char, string) {
  // your code here
  let x = '';
  if (string.startsWith(char)){
    x = true;
  }
  else return x = false;
};

function containsVowels(string) {
  // your code here
  let x = '';
  let vowels = ('a','e','i','o','u')
  if (string.match(vowels)){
    x = true;
  }
  else return x = false;
};

function isLowerCase(string) {
  // your code here
  let x = '';
  if (string.toLowerCase) {
    x = true
  }
  else return x = false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
