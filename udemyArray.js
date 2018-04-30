const arraysEl = document.getElementById("arrays")
let arraysString = ""

let numArray = [2, 4, 1, 6, 5,40, -1]

//two integers that multiple to 20
let num1
let num2

for(let i = 0; i < numArray.length; i++){
    let n = numArray[i]
    let numX = 20/n
    let numFilter = numArray.filter(n => n === numX)

    if(numFilter.length > 0){

        arraysString += "<p>Numbers in the array that multiply to 20: " + n + " & " + numX + "</p>"
        break
    }
}


let freqArray = [1, 2, 1, 3, 1, 3]

let sorted = freqArray.sort()

//most frequent number in an array
let MaxCount = 0
let currentCount = 1
let freqNum
for(let i = 0; i < sorted.length -1; i++){
    let num1 = sorted[i]
    let num2 = sorted[i+1]
    if(num1 === num2){
        currentCount += 1
    }else if(currentCount > MaxCount){
        MaxCount = currentCount
        freqNum = sorted[i]
        currentCount = 0
    } else if (num2 = "undefined"){
        arraysString += "<p>Frequent number: " + freqNum + " appears the most in the array. It appears " + MaxCount + " times"
    }
}

//common elements between two arrays
let arrayA = [1, 3, 4, 6, 7, 9]
let arrayB = [1, 2, 4, 5, 9, 10]

let commonNums = []

arrayA.forEach(n => {
    let comNum = arrayB.find(m => n === m)

    if(comNum !== undefined){
        commonNums.push(n)
    }
})
arraysString += "<p> Common numbers between the two arrays: "
commonNums.forEach(number => {
    arraysString += number + ", "
})

//array rotation of another
let rotationA = [1,2,3,4,5,6,7]
let rotationB = [4,5,6,7,1,2,3]


function isRotation(A, B){
    //check to see if the arrays are the same length
    if(A.length != B.length){
        return false
    } else {
        //keyA equals the first item in the array
        let keyA = A[0];
        //keyB by default is -1
        let keyB = -1;
        //find the value of keyA in the second array. when it is found, set keyB to that index and break the loop
        for(let i =0; i < B.length; i++){
            if(B[i] === keyA){
                keyB = i;
                break
            }
        }
        //if value of keyA is not found (keyB still equals -1) then return false
        if(keyB === -1){
            return false
        }
        //loop through
        for(let i = 0; i < A.length; i++){
            //let j equal the remainder of the b index plus a index divided by the length of the a array to find the cooresponding position of the number in b array
            let j = (keyB + i) % A.length;
            //if the numbers are not equal to each other then return false
            if(A[i] != B[j]){
                return false;
            }
        }
        return true
    }
}
let rotOf = isRotation(rotationA, rotationB)
arraysString += "<p>Are the arrays rotations of each other: " + rotOf + "</p>"

//how I solved the problem, does not work both ways
//let rotSame = true
// let i = 0;
// while (i < rotationB.length && rotSame === true) {
//     let start = rotationB.indexOf(rotationA[0])
//     let index = start + i

//     if(index >= rotationB.length){
//         index = (i +1) - start
//     }
//     let numA = rotationA[i]
//     let numB = rotationB[index]
//     if(numA===numB){
//         rotSame = true
//     }else{
//         rotSame = false
//         break
//     }
//     i++;
// }
//console.log(rotSame)



arraysEl.innerHTML = arraysString
