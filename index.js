// Code your solutions in this file


function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;

  }
  return messages;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number) {
    let i = number;
while (i >= 0) {
  console.log(i--);
}
}

countDown(11);