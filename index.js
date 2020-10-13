// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *Counter 2 uses a global variable, where Counter 1 gets data from a variable inside of their parent function but outside of their function block
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * Both of them use closure because they both use variable data from outside of the function, the "count" variable, to get the values needed to run the function
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * Counter 1 would be preferable if you plan on using this code over and over again because the variable counter2 === 2 and counter3 === 3 and so on.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  let points = Math.round(Math.random() * 2); 
  return points;
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 


  function finalScore(callback, gameTime){ 
    let score = {"Home": 0, "Away": 0}
  
    for (let i = 0; i < gameTime; i++) {
    score.Home += callback();
    score.Away += callback();
    }
    
    return score;
  
  }
    console.log(finalScore(inning, 9))




/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

/* const addAttack = function() {
    let attackPower = 0;
    return function() {
        ++attackPower;
    }
}
*/


function callback(currentInning, Away, Home) {
  if (currentInning === 1) {
  return `${currentInning}st inning: ${Away} - ${Home}`
  }
  else if (currentInning === 2) {
    return `${currentInning}nd inning: ${Away} - ${Home}`
  }
  else if (currentInning === 3) {
    return `${currentInning}rd inning: ${Away} - ${Home}`
  }
  else {
    return `${currentInning}th inning: ${Away} - ${Home}`
  }
}
  

function scoreboard(getInningScore,inning,num) {
  let score = {"Home": 0, "Away": 0};
  for (let i = 1; i <= num; i++) {
    score.Home += inning();
    score.Away += inning();
    console.log(callback(i, score.Away, score.Home))
    
  }
  return `The final score is Home team: ${score.Home} - Away team: ${score.Away}`
}


console.log(scoreboard(callback,inning,9))
  





