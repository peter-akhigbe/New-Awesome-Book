import { DateTime } from "./modules/luxon.js";

const listBtn = document.getElementById("list-btn");
const addNewBtn = document.getElementById("add-new-btn");
const contactBtn = document.getElementById("contact-btn");

const list = document.getElementById("list");
const addBook = document.getElementById("add-book");
const contactInfo = document.getElementById("contact-info");

listBtn.addEventListener("click", () => {
  list.style.display = "flex";
  addBook.style.display = "none";
  contactInfo.style.display = "none";
});

addNewBtn.addEventListener("click", () => {
  list.style.display = "none";
  addBook.style.display = "flex";
  contactInfo.style.display = "none";
});

contactBtn.addEventListener("click", () => {
  list.style.display = "none";
  addBook.style.display = "none";
  contactInfo.style.display = "flex";
});

const displayDate = () => {
  const date = document.getElementById("current-date");
  const dateNow = DateTime.now();
  date.innerHTML = dateNow.toString();
};

displayDate();
