let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistrant = true;
let lateRegistrant = false;
let runnerAge = 19;

if (runnerAge > 18 && earlyRegistrant === true) {
  raceNumber += 1000
};

if (runnerAge > 18 && earlyRegistrant === true) {
  console.log(`Your race number is ${raceNumber}. You'll race at 9:30am. Thanks for registering early!"`);
  } else if (runnerAge > 18 && !earlyRegistrant) {
    console.log(`Your race number is ${raceNumber} and you'll race at 11am. Register early next time!`);
  }