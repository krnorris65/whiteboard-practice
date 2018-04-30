//You have two buckets. One holds exactly five gallons and the other three gallons. How can you measure exactly four gallons of water into the five gallon bucket?

const waterEl = document.getElementById("water")
let waterString = ""
let five = {
    name: "Five Gallon Bucket",
    maxCapcity: 5,
    contains: 0
}

let three = {
    name: "Three Gallon Bucket",
    maxCapcity: 3,
    contains: 0
}

const addWater = (gal, bucket) => {
    let remainingSpace = bucket.maxCapcity - bucket.contains
    if( remainingSpace >= gal){
        bucket.contains += gal
        waterString += `<p>You added ${gal} gallons to the ${bucket.name}.</p>`
    } else {
        waterString += "There is not enough room in your bucket to add the water"
    }
}

addWater(4, five);
addWater(3, five);
addWater(2, three);

waterEl.innerHTML = waterString
