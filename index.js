for (let i = 1; i < 11; i++) {
    console.log(i);
}


for (let i = 1; i < 11; i++) {
    console.log(i * i);
}


for (let i = 2; i < 20; i += 2) {
    console.log(i);
}


let count = 0;
let total = 0;
while (count < 9) {
    total += count;
    count++
}
console.log(total);


let answer = "Yes";
let userAns = prompt("Are we there yet?");
while (answer != userAns) {
    userAns = prompt("Are we there yet?");
}
alert("Good!");


for (let i = 1; i < 6; i++) {
    let output = "";
    for (let j = 1; j <= i; j++) {
        output += "*"
    }
    console.log(output);
}


for (let i = 1; i < 5; i++) {
    let output = "| ";
    for (let j = 1; j <= i; j++) {
        output += i * j + " | "
    }
    console.log(output);
}


for (let i = 1; i < 7; i++) {
    let output = "| ";
    for (let j = 1; j <= i; j++) {
        output += i * j + " | ";
    }
    console.log(output);
}