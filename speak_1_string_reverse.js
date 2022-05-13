var reverseString = function(s) {
        
      
        let y = s.length - 1;
        let t = [...s];
    
        for(let i = 0; i< s.length ; i++){

              s[i] = t[y];
              y --;
        }

         return s;    
};
              
s = ["h","e","l","l","o"];

console.log(reverseString(s)); 