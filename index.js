const input = require("input")
async function askStuff(question, correctAnswer) {
    let answer = undefined
    let output = await input.text(question)
    answer = output

    if (answer.toLowerCase() == correctAnswer) {
        console.clear()
        console.log("                         ")
        console.log("You were correct!")
        console.log("                         ")
        console.log("                         ")
        console.log("                         ")
        return true;
    } else {
        console.clear()
        console.log("                         ")
        console.log("You failed! L")
        console.log("                         ")
        console.log("                         ")
        console.log("                         ")
        return false;
    }
}

async function ask() {
    let correct = 0
    let questions = [
    ["How many letters are there in the English alphabet?", "26"],
    ["How many strings does a standard guitar have?", "6"],
    ["How do you say hello in French?", "bonjour"],
    ["How many wheels does a skateboard have?", "4"],
    ["What colour do you get if you mix red and yellow?", "orange"],
    ["What coding language is this program made with?", "javascript"],
    ["What instrument has black and white keys?", "piano"],
    ["Who was the first American president?", "george washington"],
    ["What fruit does Spongebob live in?", "pineapple"],
    ["How many valves does a trumpet have?(anwer with a number)", "3"],
    ["What kind of weapon is a falchion?", "sword"],
    ["What is the final boss of famous game Minecraft?", "ender dragon"],
    ["What is the longest river in the world? It is the ....", "nile"],
    ["Which shoe and sport clothing manufacturer have a check mark as their symbol?", "nike"]
    ]

    for (i in questions) {
        await askStuff(questions[i][0], questions[i][1]).then(answer => {
            if (answer == true) {
                correct++
            }
        })
    }

    if (correct == questions.length) {
        console.log("You got a perfect score!")
    } else {
        console.log("You got " + correct + "/" + questions.length + " questions correct!")
    }
}

ask()