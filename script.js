"use strict";

const filter = document.querySelector(".tags__filter");
const optionsContainer = document.querySelector(
  ".tags__filter-option-container"
);
const filterOptions = document.querySelectorAll(".tags__filter-option");
const filterSelected = document.querySelector(".tags__filter-selected");
const notificationButton = document.querySelector("#notification-button");
const notification = document.querySelector(
  ".main-nav__notification-container"
);
const commentContainer = document.querySelector(
  "[data-commentPostId = '1234']"
);
const commentButton = document.querySelectorAll(".post__reaction-comment");

document.addEventListener("click", function (e) {
  if (e.target !== filterSelected)
    optionsContainer.classList.remove("showOptions");
  if (e.target !== document.querySelectorAll(".main-nav__menu-icon")[2])
    notification.classList.remove("showNotification");
});

notificationButton.addEventListener("click", function (e) {
  e.preventDefault();
  notification.classList.toggle("showNotification");
});

filter.addEventListener("click", function (e) {
  optionsContainer.classList.toggle("showOptions");
});

filterOptions.forEach((opt) =>
  opt.addEventListener("click", function (e) {
    e.preventDefault();
    const value = e.target.textContent;
    document.querySelector(".tags__filter-selected").innerHTML = `${value}
              <img
                src="assets/icons/angle-down-solid.svg"
                alt=""
                class="tags__filter-selected-icon"
              />`;
  })
);

const commentReplyBtn = document.querySelectorAll(
  ".post__comment-reaction-reply"
);

commentButton.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.dataset.id;
    const commentContainer = document.querySelector(
      `.post__comment-container[data-id="${id}"]`
    );
    commentContainer.classList.toggle("showComment");
  })
);

commentReplyBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const postId = e.target.dataset.id;
    const username = {
      ...e.target.parentElement.parentElement.parentElement.dataset,
    }.userid;
    const commentBox = document.querySelector(
      `.post__comment-textarea[data-id="${postId}"]`
    );
    commentBox.textContent += "@" + username + " ";

    commentBox.focus();
  })
);
