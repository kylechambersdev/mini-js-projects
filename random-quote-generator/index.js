const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans." ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things." 
];

//set method checks to see if a value exists inside of an array, cannot have duplicate values inside the array for Set() to work
//new keyword is necessary to indicate this is a new Set we are creating
//we are using Set() to hold our used(generated) indexes, so we dont show a quote more than once
const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    //if statement prevents infinite loop by reseting usedIndexes once it equals the number of indexes we have in array quotes
    if (usedIndexes.size >= quotes.length){
        usedIndexes.clear()

        while (true) {
            //Math.floor always rounds down the decimal of a number, this avoid getting 10 when highest index is 9
            const randomIdx = Math.floor(Math.random() * quotes.length)

            if (usedIndexes.has(randomIdx)) continue

            const quote = quotes[randomIdx]
            quoteElement.innerHTML = quote;
            usedIndexes.add(randomIdx)
            break
        }
    }
}