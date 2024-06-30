
let landingImg = document.querySelector(".landing");
let leftArr = document.querySelector(".left-arr");
let rightArr = document.querySelector(".right-arr");
let allBullet = document.querySelectorAll(".img-bullets li");
let allChoicesBoxes = document.querySelectorAll(".portfolio .container .shuffle li");
let allBoxes = document.querySelectorAll(".portfolio .port-content .box");
let arrayBullets = Array.from(allBullet);
let imgArray = ["../images/discount-background1.jpg","../images/landing.jpg","../images/discount-background2.jpg"];
let imgCurrentNumber = 0;
landingImg.style.cssText = `background-image: url(${imgArray[imgCurrentNumber]})`;

console.log(allBullet)

leftArr.addEventListener("click", () => {
    imgCurrentNumber--;
    onArrClick();
    removeActive(allBullet);
    arrayBullets[imgCurrentNumber].classList.add("active");
    landingImg.style.cssText = `background-image: url(${imgArray[imgCurrentNumber]})`;

})
rightArr.addEventListener("click", () => {
    imgCurrentNumber++;
    onArrClick();
    removeActive(allBullet);
    arrayBullets[imgCurrentNumber].classList.add("active");
    landingImg.style.cssText = `background-image: url(${imgArray[imgCurrentNumber]})`;
})

allBullet.forEach(bullet => {
    bullet.addEventListener("click", () => {
        removeActive(allBullet);
        imgCurrentNumber = arrayBullets.indexOf(bullet);
        bullet.classList.toggle("active")
        landingImg.style.cssText = `background-image: url(${imgArray[imgCurrentNumber]})`;
    })
});

allChoicesBoxes.forEach(choiceBox => {
    choiceBox.addEventListener("click", () => {
        removeActive(allChoicesBoxes);
        choiceBox.classList.add("active");
        console.log(choiceBox.id);
        allBoxes.forEach(box => {
            if (choiceBox.id == "all" || choiceBox.id == box.id) {
                box.classList.remove("deleted")
            } else if (choiceBox.id !== box.id) {
                box.classList.add("deleted")
            } 
        })
    })
});

function removeActive(allArray) {
    allArray.forEach(element => {
        if (element.classList.contains("active")) {
            element.classList.remove("active")
        }
    })
};

function onArrClick() {
    if (imgCurrentNumber >= imgArray.length) {
        return imgCurrentNumber = 0;
    } else if (imgCurrentNumber < 0) {
        return imgCurrentNumber = imgArray.length - 1;
    }
}