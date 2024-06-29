const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  loadURL();
});

inputBtn.addEventListener("click", function () {
  if (inputEl.value.length > 0) {
    localStorage.setItem(inputEl.value, inputEl.value);
    inputEl.value = "";
    loadURL();
  }
});

ulEl.addEventListener("click", (event) => {
  if (event.target.closest(".delete")) {
    const listItem = event.target.closest("li");
    console.log(listItem);
    const link = listItem.querySelector("a").getAttribute("href");
    localStorage.removeItem(link);
    loadURL();
  }
});

function loadURL() {
  ulEl.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    let UrlValue = localStorage.key(i);
    ulEl.innerHTML += `
    <li>
        <a target='_blank' href="${UrlValue}" title="${UrlValue}">
         ${UrlValue} 
        </a>
        <button class='delete'>
           <img src='img/bin.png' height="25px" width="25px">
        </button>
    </li>
    `;
  }
}

loadURL();
