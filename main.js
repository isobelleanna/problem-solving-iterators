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
const stringArr = ["spray", "limit", "disco", "exuberant", "destruction", "present"];
const spotTheDifference = (array) => {
    return array.filter(string => string.length > 5)
    //return array.filter(string => string.includes("e"))
}

console.log(spotTheDifference(stringArr));

// DISCO SHOES
// EXAMPLE INPUT -> ["please camel", "join casing", "these disco", "with shoes"];
// EXPECTED OUTPUT -> ["pleaseCamel", "joinCasing", "theseDisco", "withShoes"]
const discoShoesArr = ["please camel", "join casing", "these disco", "with shoes"];
const makeArrCamelCase = (array) => {
    return array.map((string) => {
        let camelArr = string.split(" ");
        return camelArr[0]+ camelArr[1].charAt(0).toUpperCase() + camelArr[1].slice(1)
    })
}

console.log(makeArrCamelCase(discoShoesArr))

// SCRABBLE
// EXAMPLE INPUT -> [{ letter: "a", value: 1}, { letter: "k", value: 5}, { letter: "c", value: 3}];
// EXPECTED OUTPUT -> 9
const scrabbleArr = [{ letter: "a", value: 1}, { letter: "k", value: 5}, { letter: "c", value: 3}];

const getScrabbleScore = array => {
    const totalObj = array.reduce((runningTotal, currentVal) => ({ value : runningTotal.value + currentVal.value}))
    return totalObj.value
}
console.log(getScrabbleScore(scrabbleArr))

// MI TO KM
// EXAMPLE INPUT -> = [10, 5];
// EXPECTED OUTPUT -> { convertedKM:[16.0934, 8.04672], totalKM: 24.14012 }
const milesArr = [10, 5];
const convertMilesToKm = array => {
    const convertedToKmArr = array.map(miles => miles * 1.609)
    const totalkmArr = convertedToKmArr.reduce((runningTotal, currentVal) => runningTotal + currentVal)
    return { convertedKM : convertedToKmArr, totalKM : totalkmArr}
}
console.log(convertMilesToKm(milesArr))

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
const foodArr = [
  { img: "🍕", name: "pizza", foodType: "junk" },
  { img: "🍔", name: "burger", foodType: "junk" },
  { img: "🍟", name: "fries", foodType: "junk" },
  { img: "🌭", name: "hot dog", foodType: "junk" },
  { img: "🥗", name: "salad", foodType: "healthy" },
  { img: "🥙", name: "pita", foodType: "healthy" },
  { img: "🥪", name: "sandwich", foodType: "healthy" },
  { img: "🌯", name: "burrito", foodType: "healthy" },
  { img: "🥣", name: "soup", foodType: "healthy" },
 ];

 const filterByFoodType = (array, foodType) => {
    return foodType === "junk" ? array.filter(obj => obj.foodType === "junk") : array.filter(obj => obj.foodType === "healthy")
 }

console.log(filterByFoodType(foodArr, "junk"))
console.log(filterByFoodType(foodArr, "healthy"))

//WE CAN BE HEROS
// EXAMPLE INPUT -> [
//  { name: "Spider-Man" },
//  { name: "Thor" },
//  { name: "Black Panther" },
//  { name: "Captain Marvel" },
//  { name: "Silver Surfer" },
// ];

// EXPECTED OUTPUT -> [
//   { id: 0, hero: "Spider-Man", power: 1 },
//   { id: 1, hero: "Thor", power: 9 },
//   { id: 2, hero: "Black Panther", power: 10 },
//   { id: 3, hero: "Captain Marvel", power: 8 },
//   { id: 4, hero: "Silver Surfer", power: 2 },
// ];

const herosArr = [
  { name: "Spider-Man" },
  { name: "Thor" },
  { name: "Black Panther" },
  { name: "Captain Marvel" },
  { name: "Silver Surfer" },
 ];

const getHeroPowerObj = array => {
    const arrayOfNames = array.map(obj => obj.name)
    return arrayOfNames.map((hero, index) => {
        let random = Math.floor(Math.random(1)* 100)
        return {id: index, name: hero, power: random}
    });
}
console.log(getHeroPowerObj(herosArr))