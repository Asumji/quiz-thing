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
    ["Question1", "answer1"],
    ["Question2", "answer2"],
    ["Question3", "answer3"]
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
