let add = (a,b)=>{
  return a+b;
}

let sub = (a,b)=>{
  return a-b;
}

let mul = (a,b)=>{
  return a*b;
}

let div = (a,b)=>{
  if(b === 0){
    return 'ERROR DIVISION NOT POSSIBLE'
  }else{
    return a/b;
  }
}

let pow = (a,b)=>{
  return a**b;
}

module.exports = {add,sub,mul,div,pow}