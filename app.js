const toDoInput = document.getElementById("to-do");
const addButton = document.getElementById("btn");

const ul = document.createElement("ul");
document.querySelector("form").after(ul);

addButton.addEventListener("click", () => {
  const div = document.createElement("div");
  ul.appendChild(div);
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  div.appendChild(checkbox);
  const li = document.createElement("li");
  div.appendChild(li);
  li.textContent = toDoInput.value;
  li.style.display = "inline";

  //   checkbox.addEventListener("click", (e) => {
  //     li.style.textDecoration = "line-through";
});
ul.addEventListener("click", (e) => {
  if (e.target.type === "checkbox") {
    if (e.target.checked) {
      e.target.parentElement.style.textDecoration = "line-through";
    } else {
      e.target.parentElement.style.textDecoration = "none";
    }
  }
});
