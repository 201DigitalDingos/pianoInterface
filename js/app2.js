// Point to the checkbox
var checkbox = document.querySelector('input[type="checkbox"]')
// Add event listener to respond when the status changes, then run function
checkbox.addEventListener('change', checkStatus);

// Run function checking if the switch is on or off
function checkStatus() {
  var isChecked = document.getElementById("check").checked;

// If it is checked, change the src attribute of the notes to the synth files. If it is off, make sure the src attributes are the normal notes. 
if (isChecked) {

  // Loop through an array of all the notes made with the constructor function on app.js, and access the element on the html with the id of the audio tag, and change the source to the synth version of the file
  for (i=0; i<allNotes.length; i++){
    document.getElementById(allAudio[i]).src = "notes/synth/"+allNames[i]+"Synth.mp3";
  }
} else {
  for (i=0; i<allNotes.length; i++){
    document.getElementById(allAudio[i]).src = "notes/"+allNames[i]+".mp3";
  }
}
}
