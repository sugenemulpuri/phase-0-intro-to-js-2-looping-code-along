// Code your solutions in this file


const names = [];

function writeCards(names) {

  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    debugger;

  }
  return names;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number) {
    let i = number;
while (i >= 0) {
  console.log(i--);
}
}

countDown(11);