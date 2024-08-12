// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let secret = "People"

// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
 let guess = prompt("Guess")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
while(secret !== guess){
  let letter = prompt("letter")
  if(secret.includes(letter)){
    console.log("Yes")
  }else{
    console.log("No")
  }
}

 
   


   
  
// Prompt the user to guess the word 
 let word = prompt("word")

// Increase attempts by 1
attempts = attempts + 1

// Write an if/else statement that checks if the user guess is equal to your word and tells the user
if(guess === secret){
  console.log("great job")
}


// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
while(secret !== guess){
// In the while loop, copy the prompt and if/else check for a letter
let letter = prompt("letter")
  if(secret.includes(letter)){
    console.log("Yes")
  }else{
    console.log("No")
  }
}

// In the while loop, copy the prompt and if/else check for the word
if(guess === secret){
  console.log("great job")
}

// In the while loop, copy the attempts increment
attempts = attempts + 1


// After the while loop, print "It took (attempts) attempts" 
console.log("It took", attempts, "attempts")