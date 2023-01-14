function findElement(arr, func) {
  for(let i=0;i<arr.length;i++){
    if(func(arr[i])){
      return arr[i];
    }
  }
 // let num = 0;
 // return num;
}
