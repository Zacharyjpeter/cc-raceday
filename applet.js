let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistrant = true;
let lateRegistrant = false;
let runnerAge = 18;

if (runnerAge > 18 && earlyRegistrant === true) {
  raceNumber += 1000
};

if (runnerAge > 18 && earlyRegistrant === true) {
  console.log(`Your race number is ${raceNumber}. You'll race at 9:30am. Thanks for registering early!"`);
  } else if (runnerAge > 18 && !earlyRegistrant) {
    console.log(`Your race number is ${raceNumber} and you'll race at 11am. Register early next time!`);
  }

if (runnerAge < 18) {
    console.log(`Your race number is ${raceNumber}. You'll race at 12:30pm. We're glad to see young people here!`);
} else if (runnerAge === 18) { console.log('Please visit the registration desk! We need to check a few details about your race.'); }