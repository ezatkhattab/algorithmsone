let sentence = prompt('Write a sentence');
let len = sentence.length;
console.log("number of charecters = "+len);

let words = sentence.split(" ");
console.log("number of words = " + words.length);

let vowels = "aeiou"
let count  = 0;
    
    for(let i=0; i<sentence.length; i++){
        for( let x=0; x<vowels.length; x++)
        if (sentence[i] === vowels[x]){
            count++;
        }
        
    }
console.log(" number of Vowels = "+ count);