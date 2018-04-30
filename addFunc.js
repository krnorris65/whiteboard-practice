// Create a function add(n)/Add(n) which returns a function that always adds n to any number

// addOne(3); // 4

// var addThree = add(3);
// addThree(3); // 6```

let add = (n) => {
    return function sum(m){
        console.log(n+m)
    }
}

let addFour = add(4);

addFour(2)

let addOne = add(1)

addOne(6)
