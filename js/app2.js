// Point to the checkbox
var checkbox = document.querySelector('input[type="checkbox"]')
// Add event listener to respond when the status changes, then run function
checkbox.addEventListener('change', checkStatus);

// Run function checking if the switch is on or off
function checkStatus() {
  var isChecked = document.getElementById("check").checked;

// If it is checked, change the src attribute of the notes to the synth files. If it is off, make sure the src attributes are the normal notes. 
if (isChecked) {
  document.getElementById("A3Note").src = "notes/synth/A3Synth.mp3";
  document.getElementById("AS3Note").src = "notes/synth/AS3Synth.mp3";
  document.getElementById("B3Note").src = "notes/synth/B3Synth.mp3";
  document.getElementById("C3Note").src = "notes/synth/C3Synth.mp3";
  document.getElementById("CS3Note").src = "notes/synth/CS3Synth.mp3";
  document.getElementById("D3Note").src = "notes/synth/D3Synth.mp3";
  document.getElementById("DS3Note").src = "notes/synth/DS3Synth.mp3";
  document.getElementById("E3Note").src = "notes/synth/E3Synth.mp3";
  document.getElementById("F3Note").src = "notes/synth/F3Synth.mp3";
  document.getElementById("FS3Note").src = "notes/synth/FS3Synth.mp3";
  document.getElementById("G3Note").src = "notes/synth/G3Synth.mp3";
  document.getElementById("GS3Note").src = "notes/synth/GS3Synth.mp3";
} else {
  document.getElementById("A3Note").src = "notes/A3.mp3";
  document.getElementById("AS3Note").src = "notes/AS3.mp3";
  document.getElementById("B3Note").src = "notes/B3.mp3";
  document.getElementById("C3Note").src = "notes/C3.mp3";
  document.getElementById("CS3Note").src = "notes/CS3.mp3";
  document.getElementById("D3Note").src = "notes/D3.mp3";
  document.getElementById("DS3Note").src = "notes/DS3.mp3";
  document.getElementById("E3Note").src = "notes/E3.mp3";
  document.getElementById("F3Note").src = "notes/F3.mp3";
  document.getElementById("FS3Note").src = "notes/FS3.mp3";
  document.getElementById("G3Note").src = "notes/G3.mp3";
  document.getElementById("GS3Note").src = "notes/GS3.mp3";
}
}
