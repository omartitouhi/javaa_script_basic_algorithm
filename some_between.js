function sumAll(arr) {
  let max=Math.max(arr[0],arr[1]);
  let min=Math.min(arr[0],arr[1]);
  let somme=0;
  for(let i=min;i<=max;i++){
    somme+=i;
  }
  return somme;
}
