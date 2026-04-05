let cat = 0;
let dog = 0;
let fox = 0;
let owl = 0;

function choose(type) {

    if (type == "cat") {
        cat = cat + 1;
    } else if (type == "dog") {
        dog = dog + 1;
    } else if (type == "fox") {
        fox = fox + 1;
    } else {
        owl = owl + 1;
    }

    btn.style.backgroundColor = "#444444";
}

function restartQuiz() {
    cat = 0;
    dog = 0;
    fox = 0;
    owl = 0;

    document.getElementById("output").textContent = "";

    let buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.style.backgroundColor = "#ffebfc";
    });
}


function result() {

    let max = cat;
    let animal = "cat";
    let image = "cat.jpg";

    if (dog > max) {
        max = dog;
        animal = "dog";
        image = "dog.jpg";
    }

    if (fox > max) {
        max = fox;
        animal = "fox";
        image = "fox.jpg";
    }

    if (owl > max) {
        max = owl;
        animal = "owl";
        image = "owl.jpg";
    }

    document.getElementById("output").textContent =
        "You are a " + animal;

    document.getElementById("animalImage").src = image;
}
