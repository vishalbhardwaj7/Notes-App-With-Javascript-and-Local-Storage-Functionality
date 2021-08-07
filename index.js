console.log("Welcome To Notes App");
//If user add a note, add to local storage.
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    var notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes(); //call show notes func to below area.
});

//Show Created Notes.
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    var notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `      <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
 
  <div class="card-body">
    <h5 class="card-title">Note ${index + 1}</h5>
    <p class="card-text">${element}</p>
    <button id="${index}" onclick="deleteNote(this.id)"  class="btn btn-primary">Delete Note</button>
  </div>
</div>`;
  });
  let notesElem = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = `Nothing to Show Use Add a Note Section`;
  }
}
//to delete a note func
function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    var notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
//search functionality
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {
  let inputValue = searchTxt.value.toLowerCase();
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.querySelector("p").innerText.toLowerCase();
    if (cardTxt.includes(inputValue)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt)
  });
});
//preventing search btn from submit
let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
});
