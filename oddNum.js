// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// [1,1,3] ==> 3
// [2,2,2,4,2] ==> 4

let array1 = [1,1,3];
let array2 = [2,2,2,4,2];
let array3 = [5,2,2,2,2,2];


let oddNum = array => {
    let firstNum = array[0]
    let secondNum = array[1]
    if(firstNum == secondNum){
        let odd = array.filter(n => n!=firstNum)
        console.log(odd[0])
    } else{
        console.log(firstNum)
    }
}

oddNum(array1);
oddNum(array2);
oddNum(array3);
