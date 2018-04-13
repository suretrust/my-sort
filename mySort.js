function mySort(li) {
  
  var ans = [];
  var ans2 = [];
  var arr = [];
  var str = [];
  var newWord = [];
  
  for (var s = 0; s < li.length; s++) {
    if (typeof li[s] === 'string'){
      str.push(li[s]);
    } else {
    newWord.push(Math.floor(li[s]));
    }
  }
  var word = newWord.sort(function(a, b){return a-b});
  
    
    for(var i = 0; i < word.length; i++) {
 
      if (word[i] % 2 !== 0){
        ans.push(word[i]);
      } else {
        ans2.push(word[i]);
      }
    }
    for(var j = 0; j<ans2.length;j++){
      ans.push(ans2[j]);
    }
    
    return ans;
}