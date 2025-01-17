document.addEventListener("DOMContentLoaded", function() {
    // code...
    var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    var dt = new Date();
    let day = dt.getDate()
    let month = dt.getMonth() 
    let year = dt.getFullYear()
    
    let answer = monthArr[month]

    var noteModal = document.getElementById("note-modal")
    var openModal = document.getElementById("add-note-modal")
    var span = document.getElementById("close");
    var textBox = document.getElementById("content_selector");
    let clearButton = document.getElementById("clearButton")
    let addNoteButton = document.getElementById("add-note-button")
    var successModal = document.getElementById("success-modal")
    let brush = document.getElementById("brush-button")
    let noteColorPicker = document.getElementById("note-color-picker")
    let notes = document.getElementById("notes")
    let notesContainer = document.getElementById("notes_container")
    let notesText = document.getElementById("notes-text")
    let deleteButton = document.getElementById("delete-note")


    openModal.onclick = function(){
        noteModal.style.display = "block";
    }

    textBox.onclick = function(){
        clearButton.style.display = "block";
    }

    span.onclick = function() {
        noteModal.style.display = "none";
     }

    clearButton.onclick = function(){
        textBox.value = ""
    }  

    addNoteButton.onclick = function(){
        if(textBox.value !== ""){
            noteModal.style.display = 'none'
            successModal.style.display = "block";
        }
        if(notesContainer.childNodes.length > 3){
            notesContainer.appendChild(notes)
            notesText.innerHTML = textBox.value;

        } else{
            notesText.innerHTML = textBox.value;
            notesContainer.appendChild(notes)
        }


        //console.log(notesContainer.childNodes.length, (new Date()).toISOString())
        document.getElementById('date-time').innerHTML= `${answer},${day} ${year}`;

        setTimeout(()=>{
            successModal.style.animation = "fadeOut 2s forwards"
            textBox.value = ""
        }, 2000)
       
    }

    
    deleteButton.onclick = function(){
        notesText.innerHTML = ""
        notes.style.backgroundColor = "sybllue"
        notes.remove()
        console.log(notesContainer.childNodes.length)
    }

    

    brush.onclick = function(){
       noteColorPicker.style.display = "initial";
    }

    noteColorPicker.oninput = function(){
      notes.style.backgroundColor = noteColorPicker.value;
    }

    window.onclick = function(event) {
        if (event.target === noteModal || event.target === successModal || event.target === noteColorPicker) {
          noteModal.style.display = "none";
          successModal.style.display = "none";
          noteColorPicker.style.display = "none"
         
        }  
    }
  });



