// 1. Switch Statement (with mistakes)
function getDayName(dayNumber) {
    switch dayNumber { // Missing parentheses
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number"
    } // Missing semicolon
}
console.log(getDayName(3)) // Missing semicolon

// 2. Function Declaration (with mistakes)
function add(a, b) {
    return a + b // Missing semicolon
    console.log(add(5, 7)); // Function call inside function body

// 3. Function Expression (with mistakes)
    const multiply = function(a, b) {
        return a * b;
    };
    console.log(multiply(4 6)); // Missing comma between arguments
