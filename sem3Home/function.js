"use strict";

function addReviews(btnEl, inputText, inputTitle, inputlistEl) {
  btnEl.addEventListener("click", () => {
    const revDescription = inputText.value;
    const revTitle = inputTitle.value;

    if (revDescription !== "" && revTitle !== "") {
      const listItem = document.createElement("li");
      listItem.classList.add("item");
      listItem.innerHTML = `<h2 class="title-desc">${revTitle}</h2>
      <button class="show">Показать отзыв</button>
      <div class="box">
      <span class="task-desc">${revDescription}</span>
      <button class="delete">Удалить</button> </div>`;

      inputlistEl.appendChild(listItem);
      inputText.value = "";
      inputTitle.value = "";

      localStorage.setItem(revTitle, inputlistEl.innerHTML);
      listItem.remove();
    } else {
      throw new Error("You didn`t enter a value");
    }
  });
}

function print(inputlist) {
  for (let i = 0; i < localStorage.length; i++) {
    let item = localStorage.key(i);

    const liEl = document.createElement("li");
    liEl.classList.add("item-li");
    liEl.innerHTML = localStorage.getItem(item);

    inputlist.appendChild(liEl);
  }
}

function delReview(inputlistEl) {
  inputlistEl.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
      const listItem = event.target.closest("li");
      listItem.parentNode.remove(listItem);
    }
  });
}

// show.forEach((button) => {
//   button.addEventListener("click", () => {
//     // const item = button.closest(".item");
//     const item = button.querySelector(".item");

//     const replyBox = item.querySelector(".box");

//     const allReplyBox = document.querySelectorAll(".box");

//     allReplyBox.forEach((show) => {
//       if (show !== replyBox) {
//         form.style.display = "none";
//       }
//     });
//     replyBox.style.display = "block";
//   });
// });

// Пыталась настроить скрытие элемента, но пока не получилось:(
