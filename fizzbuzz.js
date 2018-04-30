const fizzEl = document.getElementById("fizzbuzz")
let fizzString = ""


for(let i = 1; i<100; i++){
        if(i%3 === 0 && i%5 ===0){
            fizzString += "FizzBuzz "
        } else if(i%3 === 0){
            fizzString += "Fizz "
        } else if(i%5 === 0){
            fizzString += "Buzz "
        } else {
            fizzString += i + " "
        }
}

fizzEl.innerHTML = fizzString
