const { readFileSync, writeFileSync } = require("fs");
console.log('start');

first = readFileSync("./content/subfolder/first.txt", "utf-8");
second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

writeFileSync(
  "./content/thewrite.txt",
  ` THIS IS THE CONCAT OF ${first}, ${second},`, { flag: 'a' }
);


console.log('Done with the task');
console.log('Starting the next one');