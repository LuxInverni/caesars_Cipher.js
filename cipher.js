function caesers_cipher(str) {
/* (string) -> (string)

Function that takes a message and decodes it and 
takes an encoded message and decodes it.

Precondition: String is all Capital letters

---> caesers_cipher("SERR CVMMN!");
->"FREE PIZZA!"
---->caesers_cipher("FREE PIZZA!");
->"SERR CVMMN!"
*/

var regEx = /[A-Z]/;
var charArray = [];
for(let i = 0; i <= str.length -1; i++){
      if(regEx.test(str[i])){
          charArray.push(((str[i].charCodeAt() - 65 + 13) % 26) + 65);
      } else {
          charArray.push(str[i].charCodeAt());
      }
   }
let str1 = String.fromCharCode.apply(String, charArray);
return str1;
}

// caesers_cipher("SERR CVMMN!");// should decode to FREE PIZZA!
