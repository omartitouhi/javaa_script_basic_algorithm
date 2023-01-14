function confirmEnding(str, target) {
  let reponse =  str.slice(str.length - target.length)===target;
  return reponse;
}


//i used here substring method without using .endsWith()
