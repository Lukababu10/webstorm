const mainTitle = document.getElementById("main-title");
mainTitle.style.color = "lightblue";


const articles = document.getElementsByClassName("article-title");
for (let i = 0; i < articles.length; i++) {
    articles[i].style.color = "#007bff";
}


const paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontSize = "18px";
}


const firstButton = document.querySelector(".read-more");
firstButton.addEventListener("click", () => {
    alert("თქვენ დააჭირეთ ვრცლად ღილაკს!");
});


const allButtons = document.querySelectorAll(".read-more");
allButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.backgroundColor = "green";
    });
});