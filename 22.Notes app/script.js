const notebtn = document.getElementById("add-btn");
const notestitle = document.getElementById("note-title");
const notetext = document.getElementById("note-text");
const clear = document.querySelector(".clear");

function getnotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = "";
  } else {
    notesObj = JSON.parse(notes);
  }
}

//NOTE BTN EVENT LISTNER
notebtn.addEventListener("click", (e) => {
  console.log(notestitle.value);
  e.preventDefault();
  if (notestitle.value == "" || notetext.value == "") {
    return alert("please add details");
  }
  getnotes();

  let myObj = {
    title: notestitle.value,
    text: notetext.value,
  };
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  document.querySelector("form").reset();

  shownotes();
});

//DISPLAY NOTES
function shownotes() {
  getnotes();
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
    <div class="note">
    <div class="note-cta">
      <p class="notes-counter">${index + 1}</p>
      <div class="note-cta-btn">
        <button onclick="deletenote(this.id)" id= "${index}" class="note-btn">
          <i class="fas fa-trash"></i> Delete
        </button>

        <button onclick="editnote(this.id)" id= "${index}" class="note-btn edit-btn">
          <i class="fas fa-edit"></i> Edit
        </button>
      </div>
    </div>
    <hr />
    <h3 class="note-title">Title : ${element.title}</h3>
    <p class="note-text">${element.text}</p>
  </div>
           `;
  });
  let noteelm = document.getElementById("notes");

  if (notesObj.length !== 0) {
    noteelm.innerHTML = html;
  } else {
    noteelm.innerHTML = "No notes added please add the nots ";
  }
}

//DELETE A SINGLE NOTES

function deletenote(index) {
  console.log(index);
  let confirmdelete = confirm("are you sure wants to delete this notes");
  if (confirmdelete == true) {
    getnotes();
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
  }
}

//delete all notes
clear.addEventListener("click", () => {
  localStorage.clear();
  shownotes();
});

shownotes();

//EDIT NOTES
function editnote(index) {
  getnotes();
  notestitle.value = notesObj[index].title;
  notetext.value = notesObj[index].text;
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  shownotes();
}
