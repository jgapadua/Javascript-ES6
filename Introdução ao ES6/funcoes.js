function getName(){
  return "João Gabriel";
}

function logFn(fn) {
  console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);