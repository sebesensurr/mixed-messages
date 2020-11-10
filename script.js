// Random number generator
const randomNumGenerator = number => {
    let randomNumber = Math.floor(Math.random() * number);
    return randomNumber
}

// Database the work with
const database = {
    days: {
        Sunday: "What is the funniest day of the week? - Punday Sunday.",
        Monday: "What is the meteorology term for a sunny, warm, gorgeous day that follows two days of rain? Monday!",
        Tuesday: "Making it to Tuesday is a sign you managed to survive Monday!",
        Wednesday: "It's funny how Wednesday is sort of like a middle finger pointing up at you.",
        Thursday: "Better days are coming. They're called Friday, Saturday and Sunday!",
        Friday: "What is the only thing better than it being Friday? - When Friday is payday!",
        Saturday: "What is the only bummer early Saturday morning? - Having to watch infomericials before the cartoons start!"
    },
    quotes: [
        '“Men marry women with the hope they will never change. Women marry men with the hope they will change. Invariably they are both disappointed.” - Albert Einstein',
        '“The best thing about the future is that it comes one day at a time.” - Abraham Lincoln',
        '“All the things I really like to do are either immoral, illegal or fattening.” – Alexander Woollcott',
        '“The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.” – Bill Watterson',
        '“A bank is a place that will lend you money if you can prove that you don’t need it.” – Bob Hope',
        '“If you think you are too small to make a difference, try sleeping with a mosquito.” – Dalai Lama',
        '“An alcoholic is someone you don’t like who drinks as much as you do.” – Dylan Thomas',
        '“I drink to make other people more interesting.” - Ernest Hemingway',
        '“The first time I sang in the church choir; two hundred people changed their religion.” – Fred Allen',
        '“All men are equal before fish.” – Herbert Hoover',
        '“Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.” – Miles Kington'
    ],
    dadJokes: [
        '"Dad, did you get a haircut?" "No, I got them all cut!"',
        '"Did you hear the rumor about butter?" "Well, I\'m not going to spread it!"',
        '"Dad, can you put my shoes on?" "No, I don\'t think they\'ll fit me."',
        "I'm on a seafood diet. I see food and I eat it.",
        "If you see a crime at an Apple Store, does that make you an iWitness?",
        "Can February March? No, but April May!",
        "Spring is here! I got so excited I wet my plants.",
        "Don't trust atoms. They make up everything!",
        "I like telling Dad jokes. Sometimes he laughs!",
        "I ordered a chicken and an egg online. I’ll let you know."
    ]
}

// Determine the actual day
const today = function () {
    const d = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const today = weekday[d.getDay()];
    return today;
}

// Message generator for the actual day
const dailyMessage = () => {
    let message = ''
    const actualDay = today();
    for (day in database.days) {
        if (day === actualDay) {
            message = database.days[day]
        }
    }
    console.log(message) ;
}

// Random quote generator
const quote = () => {
    let number = database.quotes.length;
    let randomNum = randomNumGenerator(number);
    let theQuote = database.quotes[randomNum];
    
    console.log(theQuote);
}

// Random Dad Joke generator
const dadJoke = () => {
    let number = database.quotes.length;
    let randomNum = randomNumGenerator(number);
    let theJoke = database.dadJokes[randomNum];

    console.log(theJoke);
}


function messageGenerator() {  
    dailyMessage();
    quote();
    dadJoke();
}

messageGenerator();

