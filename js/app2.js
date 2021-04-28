// Point to the checkbox
var radioButtons = document.getElementById("instrument-slider");
// Add event listener to respond when the status changes, then run function
radioButtons.addEventListener('change', checkStatus);

// Point to the page, the main section
const pageElem = document.getElementById("main");


// Check which radio button is clicked by creating variables for each input, then seeing which is checked
function checkStatus() {
  var isPiano = document.getElementById("piano").checked;
  var isSynth = document.getElementById("synth").checked;
  var isDrums = document.getElementById("drums").checked;

// If it is checked, change the src attribute of the notes to the synth files. If it is off, make sure the src attributes are the normal notes. 
if (isSynth) {

  // Clear the classes and give it a new class
  pageElem.className ="";
  pageElem.classList.add('synth');
  console.log(pageElem);

  // Loop through an array of all the notes made with the constructor function on app.js, and access the element on the html with the id of the audio tag, and change the source to the synth version of the file
  for (i=0; i<allNotes.length; i++){
    document.getElementById(allAudio[i]).src = "notes/synth/"+allNames[i]+"Synth.mp3";

  } 
} else if (isPiano){

    // Clear the classes and give it a new class
    pageElem.className ="";
    pageElem.classList.add('traditional');

    for (i=0; i<allNotes.length; i++){
      document.getElementById(allAudio[i]).src = "notes/"+allNames[i]+".mp3";

  } 
} else if (isDrums) {

    // Clear the classes and give it a new class
    pageElem.className ="";
    pageElem.classList.add('drums');

    for (i=0; i<allNotes.length; i++){
      document.getElementById(allAudio[i]).src = "notes/drums/"+allNames[i]+"Drums.mp3";
  } 
}
}

