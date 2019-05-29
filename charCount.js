function countLetters(string){
  let result = {};
  let newString = string.split(" ").join("").toLowerCase();
  for(char of newString){
    if(result[char]){
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  console.log(result)
}

countLetters("lighthouse in the house")