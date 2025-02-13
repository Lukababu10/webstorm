const now = new Date();
console.log("Current Date and Time:", now.toLocaleString());

const double = num => num * 2;
console.log("Double of 5:", double(5));

function buggyFunction() {
    let a = 5;
    let b = 10;
    console.log("Before mistake:", a, b);


    console.log("Sum:", a + c);
}
try {
    buggyFunction();
} catch (error) {
    console.error("Error caught:", error);
}
