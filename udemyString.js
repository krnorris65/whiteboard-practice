const stringsEl = document.getElementById("strings")
let stringsString = ""
//non-repeating character, if multiple return first one, if none, return null

function nonRepeat(string){
    //splits string into individual letters
    let letters = string.split("")
    let nonRepeat = []
    for(let i = 0; i < letters.length; i++){
        let char = letters[i]
        let repeating = letters.filter(n => n === char)
        if(repeating.length === 1){
            nonRepeat.push(char)
        }
    }
    if(nonRepeat.length > 0){
        stringsString += "<p> non-repeating character = " + nonRepeat[0] + "</p>"
    } else{
        stringsString += "<p>non-repeating character = null</p>"
    }
}
nonRepeat("abcab") //should return 'c'
nonRepeat("abab") // should return None
nonRepeat("aabbbc") // should return 'c'
nonRepeat("aabbdbc") // should return 'd'


//if one character off in same position
//if you can add on character
//if you can remove one character

function is_one_away(string1, string2){
    //number of characters that are different
    let charDiff = 0
    //if strings are equal width
    if(string1.length === string2.length){
        stringsString += "<p>Strings are equal length and are "
        for(let i =0; i < string1.length; i++){
            let char1 = string1.charAt(i)
            let char2 = string2.charAt(i)
            if( char1 !== char2){
                charDiff += 1
            }
        }
    } else{
        let stringA
        let stringB
        if(string1.length > string2.length){
            stringA = string1
            stringB = string2
        } else if(string2.length > string1.length){
            stringA = string2
            stringB = string1
        }

        //if one string is one character longer than the other
        if((stringA.length - stringB.length) === 1){
            stringsString += "<p>One string is one character longer and the strings are "
            //WAY INSTRUCTOR SOLVED IT
            let i = 0
            let countDiff=0
            while (i < stringB.length){
                let char1 = stringA.charAt(i + countDiff)
                let char2 = stringB.charAt(i)
                if(char1 === char2){
                    i+=1
                } else{
                    countDiff +=1
                }
            }
            charDiff = countDiff
        
            //WAY I SOLVED IT
            // for(let i =0; i < stringB.length; i++){
            //     let char1 = stringA.charAt(i)
            //     let char2 = stringB.charAt(i)
            //     if( char1 !== char2){
            //         //add the character from the longer array into the shorter array
            //         let addCharStringB = [stringB.slice(0, i), char1, stringB.slice(i)].join('');

            //         //if the longer array equals the updated shorter array
            //         if(stringA === addCharStringB){
            //             //reassign shorter array to the updated one
            //             stringB = addCharStringB
            //             //add one to character difference
            //             charDiff += 1
            //         } else{
            //             //if not then break since it is greater than one different
            //             charDiff = 2
            //             break
            //         }
            //     }
            // }
        }else{
            charDiff = 2
            stringsString += "Strings are not equal length and therefore are "
        }
    }
    //if charDiff is 1 or 0, then the strings are 1 change away
    if(charDiff <= 1){
        stringsString += "<b>one away</b></p>"
    }else{
        stringsString += "<b>not one away</b></p>"
    }


}

is_one_away("abcde", "abcd")  // should return True
is_one_away("abde", "abcde")  // should return True
is_one_away("a", "a")  // should return True
is_one_away("abcdef", "abqdef")  // should return True
is_one_away("abcdef", "abccef")  // should return True
is_one_away("abcdef", "abcde")  // should return True
is_one_away("aaa", "abc")  // should return False
is_one_away("abcde", "abc")  // should return False
is_one_away("abc", "abcde")  // should return False
is_one_away("abc", "bcc")  // should return False

stringsEl.innerHTML = stringsString
