const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";
// for (let i = 0; i < splitText.length; i++) {
//   text.innerHTML += "<span>" + splitText[i] + "</span>";
// }
splitText.forEach(el => {
  text.innerHTML += `
    <span>${el}</span>
  `;
});
