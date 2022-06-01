// CAPITAL NAMES
// EXAMPLE INPUT -> ["charlie", "rob"];
// EXPECTED OUTPUT -> ["Charlie", "Rob"]
const firstNameArr = ["charlie", "rob"];
const capitaliseFirstLetter = (array) => {
    return array.map(name => name.charAt(0).toUpperCase() + name.slice(1))
}
console.log(capitaliseFirstLetter(firstNameArr));

// REMOVE VOWELS
// EXAMPLE INPUT -> ["c", "r", "a"];
// EXPECTED OUTPUT -> ["c", "r"]
const charArr = ["c", "r", "a", "B", "E", "G", "i"];
const removeVowelsFromArray = (array) => {
    const vowels = ["a", "e", "i", "o", "u"];
    return array.filter(string => !vowels.includes(string.toLowerCase()))

    //return array.filter(string => string.toLowerCase() != "a" && string.toLowerCase() != "e" && string.toLowerCase() != "i" &&
    //string.toLowerCase() != "o" && string.toLowerCase() != "u")
}
console.log(removeVowelsFromArray(charArr));

// MEAN COACHES
// EXAMPLE INPUT -> [25, 50, 175, 50];
// EXPECTED OUTPUT -> 75
const coachesArr = [25, 50, 175, 50];
const averageOfAnArray = (array) => {
    return (array.reduce((runningTotal, currentVal) => runningTotal + currentVal)) / array.length
}

console.log(averageOfAnArray(coachesArr));

// SPOT THE DIFFERENCE 
// EXAMPLE INPUT -> ["spray", "limit", "disco", "exuberant", "destruction", "present"];
// EXPECTED OUTPUT -> ["exuberant", "destruction", "present"]

// DISCO SHOES
// EXAMPLE INPUT -> ["please camel", "join casing", "these disco", "with shoes"];
// EXPECTED OUTPUT -> ["pleaseCamel", "joinCasing", "theseDisco", "withShoes"]

// SCRABBLE
// EXAMPLE INPUT -> [{ letter: "a", value: 1}, { letter: "k", value: 5}, { letter: "c", value: 3}];
// EXPECTED OUTPUT -> 9

// MI TO KM
// EXAMPLE INPUT -> = [10, 5];
// EXPECTED OUTPUT -> { convertedKM:[16.0934, 8.04672], totalKM: 24.14012 }

// FILTER FOOD
// EXAMPLE INPUT -> [
//  { img: "🍕", name: "pizza", foodType: "junk" },
//  { img: "🍔", name: "burger", foodType: "junk" },
//  { img: "🍟", name: "fries", foodType: "junk" },
//  { img: "🌭", name: "hot dog", foodType: "junk" },
//  { img: "🥗", name: "salad", foodType: "healthy" },
//  { img: "🥙", name: "pita", foodType: "healthy" },
//  { img: "🥪", name: "sandwich", foodType: "healthy" },
//  { img: "🌯", name: "burrito", foodType: "healthy" },
//  { img: "🥣", name: "soup", foodType: "healthy" },
// ];

// EXPECTED OUTPUT -> JUNK -> [
//   { img: "🍕", name: "pizza", foodType: "junk" },
//   { img: "🍔", name: "burger", foodType: "junk" },
//   { img: "🍟", name: "fries", foodType: "junk" },
//   { img: "🌭", name: "hot dog", foodType: "junk" },
// ]

// EXPECTED OUTPUT -> HEALTHY -> [
//   { img: "🥗", name: "salad", foodType: "healthy" },
//   { img: "🥙", name: "pita", foodType: "healthy" },
//   { img: "🥪", name: "sandwich", foodType: "healthy" },
//   { img: "🌯", name: "burrito", foodType: "healthy" },
//   { img: "🥣", name: "soup", foodType: "healthy" },
// ]
