//palindromes
const palindromeEl = document.getElementById("palindromes")
let palindromeString = ""

let wordArray = ["Hannah", "Kite", "divide", "civic", "radar"]

wordArray.forEach(word => {
    let letters = word.toLowerCase().split("")
    
        letters.reverse()
        let reverseWord = letters.join("");
    
        if(reverseWord === word.toLowerCase()){
            palindromeString += "<p>" + word + " is a palindrome</p>"
        } else{
            palindromeString += "<p>" + word + " is NOT a palindrome</p>"
        }
})

palindromeEl.innerHTML = palindromeString

