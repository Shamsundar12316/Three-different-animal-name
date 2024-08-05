// part 30 // question 35
// three different animal names
var animalpet = ["dog", "cat", "rabbit"];
console.log("Animal Names : \n");
for (var i = 0; i < animalpet.length; i++) {
    console.log("".concat(animalpet[i]));
}
console.log("Statement:\n");
for (var i = 0; i < animalpet.length; i++) {
    console.log("\nA ".concat(animalpet[i].toLowerCase(), "  would make a great pet"));
}
console.log("\nAny of these animals would make a great pet");
