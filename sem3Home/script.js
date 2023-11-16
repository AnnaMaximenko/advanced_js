"use strict";

const btnEl = document.querySelector(".button");
const inputText = document.querySelector(".input-text");
const inputTitle = document.querySelector(".input-title");
const inputlistEl = document.querySelector(".list");

addReviews(btnEl, inputText, inputTitle, inputlistEl);
delReview(inputTitle, inputlistEl);
