let clearbtn = document.getElementsByClassName("clearAll")[0];
let textbox = document.getElementById("textbox");
let answerbtn = document.getElementsByClassName("answer")[0];
let deletebtn = document.getElementsByClassName("delbtn")[0];

for (let i = 0; i <= 9; i++) {
  document.querySelectorAll(".num")[i].addEventListener("click", () => {
    textbox.value =
      textbox.value + parseInt(document.querySelectorAll(".num")[i].value);
  });
}
for (let i = 0; i <= 3; i++) {
  document.querySelectorAll(".ope")[i].addEventListener("click", () => {
    textbox.value = textbox.value + document.querySelectorAll(".ope")[i].value;
  });
}
for (let i = 0; i <= 1; i++) {
  document.querySelectorAll(".brac")[i].addEventListener("click", () => {
    textbox.value = textbox.value + document.querySelectorAll(".brac")[i].value;
  });
}

clearbtn.addEventListener("click", () => {
  textbox.value = "";
});

answerbtn.addEventListener("click", () => {
  textbox.value = eval(textbox.value);
});

deletebtn.addEventListener("click", () => {
  textbox.value = textbox.value.slice(0, textbox.value.length - 1);
});

// -----------------------------------
document.getElementsByClassName("dot")[0].addEventListener("click", () => {
  textbox.value =
    textbox.value + document.getElementsByClassName("dot")[0].value;
});

document.getElementsByClassName("root")[0].addEventListener("click", () => {
  textbox.value = Math.sqrt(textbox.value);
});
document.getElementsByClassName("sqr")[0].addEventListener("click", () => {
  textbox.value = Math.pow(textbox.value, 2);
});
document.getElementsByClassName("cube")[0].addEventListener("click", () => {
  textbox.value = Math.pow(textbox.value, 3);
});
document.getElementsByClassName("pi")[0].addEventListener("click", () => {
  textbox.value = Math.PI.toFixed(10);
});
