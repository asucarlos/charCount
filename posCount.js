function countLetters(string){
  let result = {};
  let newString = string.split(" ").join("").toLowerCase();
  for(let i = 0; i < newString.length; i++){
    if(result[newString[i]]){
      result[newString[i]].push(i);
    } else {
      result[newString[i]] = [i];
    }
  }
  console.log(result)
}

countLetters("lighthouse in the house")