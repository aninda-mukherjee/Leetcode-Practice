

function disemvowel(str) {             
    let newString = " ";                            
    for (let i = 0; i < str.length; i++)  
        {           
            if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u")                                   
            {           
            newString += str[i];         
            };   
        };   
    return newString;   
  };  
  console.log(disemvowel("leetcodeisacommunityforcoders"));  
  