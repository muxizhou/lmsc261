let numFrogs = prompt("How many frogs are about to jump in?");
const maxFrogCapasity = 15;
let isPondOverCapasity = numFrogs >= maxFrogCapasity;
let messageToPrint = isPondOverCapasity ? "It's too crowded!" : "Come on in!"
print (messageToPrint);
