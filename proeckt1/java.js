function changeText() {
    document.getElementById("text").innerText = "ტექსტი შეიცვალა!";
}
function addItem() {
    let li = document.createElement("li");
    li.innerText = "ახალი ელემენტი";
    document.getElementById("myList").appendChild(li);
}
function toggleBox() {
    let box = document.getElementById("box");
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}
function showName() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("output").innerText = "შენი სახელი: " + name;
}
function changeColor() {
    let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}