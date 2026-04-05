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



function result() {

    let max = cat;
    let animal = "Cat";

    if (dog > max) {
        max = dog;
        animal = "Dog";
    }

    if (fox > max) {
        max = fox;
        animal = "Fox";
    }

    if (owl > max) {
        max = owl;
        animal = "owl";
    }

    document.getElementById("output").textContent =
        "You are a " + animal;

}
