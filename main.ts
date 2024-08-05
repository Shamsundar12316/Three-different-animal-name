// part 30 // question 35
// three different animal names

let animalpet: string[] = ["dog","cat","rabbit"]

console.log("Animal Names : \n")
for(let i=0; i<animalpet.length; i++){
    console.log(`${animalpet[i]}`)
}
console.log("Statement:\n")
for(let i=0; i<animalpet.length; i++){
    console.log(`\nA ${animalpet[i].toLowerCase()}  would make a great pet`)
}
console.log("\nAny of these animals would make a great pet")