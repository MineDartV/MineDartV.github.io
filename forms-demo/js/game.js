// this file is for code needed for
// input, quiz and truth game 

// global variable for first name
// a variable that can be used in all functions
// first name
let fname = "";


// function to get info from intro form
// check input, and produce a sentence
function greet(){
    let greetParagraph = document.getElementById("greet");

    // get the values from the form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    // check the input 
    if (fname==="" || lname===""){
        alert("First and last name cannot be an empty string!");
        return;
    }
    // age check
    if (age==="" || age < 18){
        alert("Invalid age! You must be 18 or older!")
        return;
    }

    // update output paragraph 
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + "!"
}

// function to play the trivia game

function trivia1(){
    // get handle to answer paragraph
    let triviaAnswer = document.getElementById("trivia-answer");

    // get handles and values from radio selections
    let chocSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // give the results 
    if (chocSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong!";
    }
    else if (tunaSelected){
        triviaAnswer.innerHTML = fname + ", tuna is wrong!";
    }
    else if (honeySelected){
        triviaAnswer.innerHTML = fname + ", Bravo! You are right!";
    }
    else {
        triviaAnswer.innerHTML = "Uh oh. Something went wrong!!!";
    }
}

function twotruthslie1(){
    let lieAnswer = document.getElementById("twotruthslie");
    let chinaSelected = document.getElementById("china").checked;
    let trackSelected = document.getElementById("Track").checked;
    let boneSelected = document.getElementById("bone").checked;

    if (chinaSelected){
        lieAnswer.innerHTML = fname + ", you are right!";
    }
    else if (trackSelected){
        lieAnswer.innerHTML = fname + ", you are wrong!";
    }
    else if (boneSelected){
        lieAnswer.innerHTML = fname + ", you are wrong!";
    }
}

function truths1(){
    let truthAnswer = document.getElementById("truths");
    let youtubeSelected = document.getElementById("youtube").checked;
    let twitchSelected = document.getElementById("twitch").checked;
    let tiktokSelected = document.getElementById("tiktok").checked;

    if (youtubeSelected && twitchSelected){
        truthAnswer.innerHTML = fname + ", you are right!";
    }

    else{
        truthAnswer.innerHTML = fname + ", you are wrong!";
    }
}