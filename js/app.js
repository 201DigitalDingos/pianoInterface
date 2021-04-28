'use strict';

// recording
let recording = false;
let showNote = false;
const noteArray = document.getElementsByClassName("text");
// console.log(noteArray);
const recordButton = document.getElementById("customChord");

// recording array
let recordingArray = [];

function localStorageUpdate() {
  let storedNotes = localStorage.getItem(`storedKeys`);
  if (storedNotes) {
    recordingArray = JSON.parse(storedNotes);
  }
}

// record button listener
recordButton.addEventListener('click', toggleRecord);

// function callback for recording custom chord
function toggleRecord() {
  recording = !(recording);
  if (recording) {
    recordingArray = [];
  }
}

// listener to button for text toggle
const noteDisplay = document.getElementById("noteDisplay");

// event listener for text toggle
noteDisplay.addEventListener('change', noteDisplayFunc);

// callback function for text toggle
function noteDisplayFunc() {
  showNote = !(showNote);
  if (showNote === true) {
    for (let note of noteArray) {
      note.setAttribute('class', 'shown text');
    }
  }
  if (showNote === false) {
    for (let note of noteArray) {
      note.setAttribute('class', 'hidden text');
    }
  }
}

Note.prototype.handleClick = function () {
  if (recording === true) {
    recordingArray.push(this.audioId);
    let recordedStorage = JSON.stringify(recordingArray);
    localStorage.setItem(`storedKeys`, recordedStorage);
  }
  const x = document.getElementById(this.audioId);
  x.load();
  x.play();

  this.currentButton.classList.add('active');
  this.currentButton.addEventListener('mouseup', this.stopActive.bind(this));
}

Note.prototype.stopActive = function() {
  console.log('Im here');
  this.currentButton.classList.remove('active');
}

function Note(name) {
  this.name = name;
  this.audioId = `${name}Note`;
  this.normalMP3 = `notes/${name}.mp3`;
  this.buttonName = `button${name}`;

  this.currentButton = document.getElementById(this.buttonName);
  this.currentButton.addEventListener('mousedown', this.handleClick.bind(this));

  allNotes.push(this);
  allAudio.push(this.audioId);
  allNames.push(this.name);
}

// Create array with all note objects and another array with all audioId tags
let allNotes = [];
let allAudio = []; 
let allNames = [];

// Octave 2
new Note('A2');
new Note('AS2');
new Note('B2');
new Note('C2');
new Note('CS2');
new Note('D2');
new Note('DS2');
new Note('E2');
new Note('F2');
new Note('FS2');
new Note('G2');
new Note('GS2');

// Octave 3
new Note('A3');
new Note('AS3');
new Note('B3');
new Note('C3');
new Note('CS3');
new Note('D3');
new Note('DS3');
new Note('E3');
new Note('F3');
new Note('FS3');
new Note('G3');
new Note('GS3');

// Octave 4
new Note('A4');
new Note('AS4');
new Note('B4');
new Note('C4');
new Note('CS4');
new Note('D4');
new Note('DS4');
new Note('E4');
new Note('F4');
new Note('FS4');
new Note('G4');
new Note('GS4');

// chords
const cMajorButton = document.getElementById("CMajor");
const cSMajorButton = document.getElementById("CSMajor");
const dMajorButton = document.getElementById("DMajor");
const dSMajorButton = document.getElementById("DSMajor");
const eMajorButton = document.getElementById("EMajor");
const fMajorButton = document.getElementById("FMajor");
const fSMajorButton = document.getElementById("FSMajor");
const gMajorButton = document.getElementById("GMajor");
const gSMajorButton = document.getElementById("GSMajor");
const aMajorButton = document.getElementById("AMajor");
const aSMajorButton = document.getElementById("ASMajor");
const bMajorButton = document.getElementById("BMajor");

// chords event listeners
cMajorButton.addEventListener('click', handleClickCMajor);
cSMajorButton.addEventListener('click', handleClickCSMajor);
dMajorButton.addEventListener('click', handleClickDMajor);
dSMajorButton.addEventListener('click', handleClickDSMajor);
eMajorButton.addEventListener('click', handleClickEMajor);
fMajorButton.addEventListener('click', handleClickFMajor);
fSMajorButton.addEventListener('click', handleClickFSMajor);
gMajorButton.addEventListener('click', handleClickGMajor);
gSMajorButton.addEventListener('click', handleClickGSMajor);
aMajorButton.addEventListener('click', handleClickAMajor);
aSMajorButton.addEventListener('click', handleClickASMajor);
bMajorButton.addEventListener('click', handleClickBMajor);

// Event listener for playback button
const playbackButton = document.getElementById("playback");

playbackButton.addEventListener('click', handlePlayback);

function handlePlayback() {
  for (let note of recordingArray) {
    const x = document.getElementById(note);
    x.load();
    x.play();
  }
}

// C Major chord
function handleClickCMajor() {
  playChord("C3Note", "E3Note", "G3Note");
}

function handleClickCSMajor() {
  playChord("CS3Note", "F3Note", "GS3Note");
}

function handleClickDMajor() {
  playChord("D3Note", "FS3Note", "A3Note");
}

function handleClickDSMajor() {
  playChord("DS3Note", "G3Note", "AS3Note");
}

function handleClickEMajor() {
  playChord("E3Note", "GS3Note", "B3Note");
}

function handleClickFMajor() {
  playChord("F3Note", "A3Note", "C3Note");
}

function handleClickFSMajor() {
  playChord("FS3Note", "AS3Note", "CS3Note");
}

function handleClickGMajor() {
  playChord("G3Note", "B3Note", "D3Note");
}

function handleClickGSMajor() {
  playChord("GS3Note", "C3Note", "DS3Note");
}

function handleClickAMajor() {
  playChord("A3Note", "CS3Note", "E3Note");
}

function handleClickASMajor() {
  playChord("AS3Note", "D3Note", "F3Note");
}

function handleClickBMajor() {
  playChord("B3Note", "DS3Note", "FS3Note");
}

function playChord(a, b, c) {
  const x = document.getElementById(a);
  const y = document.getElementById(b);
  const z = document.getElementById(c);
  x.load();
  y.load();
  z.load();
  x.play();
  y.play();
  z.play();
}

localStorageUpdate();