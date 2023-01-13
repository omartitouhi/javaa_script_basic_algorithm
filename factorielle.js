function factorialize(num) {
  let num1 = 1;
  for(let i=2;i<=num;i++){
    num1=num1*i;
  }
  return num1;
}

factorialize(5);
