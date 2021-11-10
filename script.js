var keyboardOutput = document.querySelector(".keyboard__input");
var keyboardBtn = document.querySelectorAll(".keyboard__panel_btn");
var upRegisterBtn = document.querySelector(".upper");
var lowRegisterBtn = document.querySelector(".lower");

var stroke = "";
var arr = [];
var isUppercaseOn = false;

for (let i = 0; i < keyboardBtn.length; i++) {
    keyboardBtn[i].addEventListener("click", function () {
        if (this.value == "space") {
            stroke += " ";
        } else if (this.value == "backSpace") {
            arr = stroke.split("");
            arr.pop();
            stroke = arr.join("");
        } else if (this.value == "upperRegister") {
            isUppercaseOn = true;
            this.style.display = "none";
            lowRegisterBtn.style.display = "block";
        } else if (this.value == "lowerRegister") {
            isUppercaseOn = false;
            this.style.display = "none";
            upRegisterBtn.style.display = "block";
        }
        else {
            if (isUppercaseOn == true) {
                stroke += String(this.value).toUpperCase();
            } else {
                stroke += String(this.value);
            }
        }
        keyboardOutput.value = stroke;
    })
}