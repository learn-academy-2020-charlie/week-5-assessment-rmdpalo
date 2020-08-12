// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const l33tSp34k = (string) => {
    tempArr = string.split("")
    return tempArr.map(value => {
        if (value === "a") {
            return value.replace(/a/gi, "4")
        } else if (value === "e"){
            return value.replace(/e/gi, "3")
        } else if (value === "i"){
            return value.replace(/i/gi, "1")
        } else if (value === "o"){
            return value.replace(/o/gi, "0")
        }else {
            return value
        }
    }).join("")
}

// const l33tSp34k2 = (string) => {
//     string.replace(/a/gi, "4")
//     string.replace(/e/gi, "3")
//     string.replace(/i/gi, "1")
//     string.replace(/o/gi, "0")
// }
// console.log(l33tSp34k(secretCodeWord1));
// console.log(l33tSp34k(secretCodeWord2));


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const aWord = (array) => {
    return array.filter(value => {
        return value.toLowerCase().includes("a")
    })
}

// console.log(aWord(arrayOfWords));



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

const fullHouse = (arr) => {
    result = 
    arr.sort();
    //since the prompt is specific, it allows me to work with specifics. If I have an input of exactly 5 numbers, and I'm looking for a pair and a three of a kind there are only two possible combinations if I sort it. 
        // I get an array with a pair (0, 1) and three of a kind (2..4) or a three of a kind and a pair.
        // I only have a full house if I meet the strict equality in those 2 possibilities.
    if (((arr[0] === arr[1]) && (arr[2] === arr[3] && arr[3] === arr[4]))||((arr[3] === arr[4]) && (arr[0] === arr[1] && arr[1] === arr[2]))){
        result = true
    } else {
        result = false
    }
    return result

}

console.log(fullHouse(hand2));