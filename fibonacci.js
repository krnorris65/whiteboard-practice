//fibonacci whiteboard
const fibEl = document.getElementById("fibonacci")
let fibString = ""

let a = 0
let b = 1
let fiboncci = []

fiboncci.push(a, b)

for(let i = 0; i < 30; i++){
    let c = a+b
    fiboncci.push(c)

    a=b
    b=c
}

for(let i = 0; i<fiboncci.length; i++){
    let num = fiboncci[i]
    if(fiboncci.length - i !== 1){
        fibString += `${num}, `
    } else{
        
        fibString += `${num}`
    }

}

fibEl.innerHTML =fibString
