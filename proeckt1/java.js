function getDayName(dayNumber) {
    switch dayNumber {
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
    }
}
console.log(getDayName(3))
function add(a, b) {
    return a + b
    console.log(add(5, 7));
    const multiply = function(a, b) {
        return a * b;
    };
    console.log(multiply(4 6));
