'use strict';

// Assign Variables
let recording = false;
let showNote = false;
let octave = '2';

// Create Arrays
let recordingArray = [];
let allNotes = [];
let allAudio = [];
let allNames = [];
let allChords = [];

// Declare Functions
function localStorageUpdate() {
  let storedNotes = localStorage.getItem(`storedKeys`);
  if (storedNotes) {
    recordingArray = JSON.parse(storedNotes);
  }
}


/////////////////////////////////RECORD FEATURE/////////////////////////////////////////////////

// 1. RECORD

///////// create abstract record button
const recordButton = document.getElementById("customChord");
///////// event listener for record button
recordButton.addEventListener('click', toggleRecord);
////////// event handler for record button
function toggleRecord() {
  recording = !(recording);
  if (recording) {
    recordingArray = [];
    document.getElementById('customChord').style.backgroundColor='red';
  }
}

// 2. PLAYBACK

// create abstract playback button
const playbackButton = document.getElementById("playback");
// event listener for playback button
playbackButton.addEventListener('click', handlePlayback);
// event handler for playback
function handlePlayback() {
  for (let note of recordingArray) {
    const x = document.getElementById(note);
    x.load();
    x.play();
    document.getElementById('customChord').style.backgroundColor='pink';
  }
}


/////////////////////////////////NOTE DISPLAY FEATURE/////////////////////////////////////////////////

// fill array with note text
const noteArray = document.getElementsByClassName("text");
// create abstract display notes button
const noteDisplay = document.getElementById("noteDisplay");
// event listener for display notes button
noteDisplay.addEventListener('change', noteDisplayFunc);
// event handler for display notes button
function noteDisplayFunc() {
  // change boolean when button is clicked
  showNote = !(showNote);
  // show notes when button is turned on
  if (showNote === true) {
    for (let note of noteArray) {
      note.setAttribute('class', 'shown text');
    }
  }
  //hide notes when button is turned off
  if (showNote === false) {
    for (let note of noteArray) {
      note.setAttribute('class', 'hidden text');
    }
  }
}


///////////////////////////////////////"NOTE" OBJECTS AND METHODS///////////////////////////////////////////////////////////

function Note(name) {
  // set note name, audio ID, normal mp3 file
  this.name = name;
  this.audioId = `${name}Note`;
  this.normalMP3 = `notes/${name}.mp3`;
  // create abstract note button
  this.buttonName = `button${name}`;
  this.currentButton = document.getElementById(this.buttonName);
  // assign event listener to button
  // event handler stays active when mouse is down
  this.currentButton.addEventListener('mousedown', this.handleClick.bind(this));
  // fill arrays
  allNotes.push(this);
  allAudio.push(this.audioId);
  allNames.push(this.name);
}

Note.prototype.handleClick = function () {
  // put notes in local storage array if recording is active
  if (recording === true) {
    recordingArray.push(this.audioId);
    let recordedStorage = JSON.stringify(recordingArray);
    localStorage.setItem(`storedKeys`, recordedStorage);
  }
  // find audio tag by element
  const x = document.getElementById(this.audioId);
  // call audio element methods to play mp3 file
  x.load();
  x.play();
  // give button "active" class when clicked
  this.currentButton.classList.add('active');
  // assign event listener to current clicked button
  this.currentButton.addEventListener('mouseup', this.stopActive.bind(this));
}

Note.prototype.stopActive = function() {
  // event handler removes "active" class when click stops
  this.currentButton.classList.remove('active');
}


///////////////////////////////////////"CHORD" OBJECTS AND METHODS///////////////////////////////////////////////////////////

function Chord(name, note1, note2, note3) {
  // set chord name
  this.name = name;
  // set chord notes
  this.noteName1 = note1 + octave;
  this.noteName2 = note2 + octave;
  this.noteName3 = note3 + octave;
  // set audio tag ID's for chord notes
  this.audioId_1 = `${this.noteName1}Note`;
  this.audioId_2 = `${this.noteName2}Note`;
  this.audioId_3 = `${this.noteName3}Note`;
  // create abstract chord button
  this.currentButton = document.getElementById(this.name);
  // assign event listeners to button
  this.currentButton.addEventListener('click', this.handleClick.bind(this));
  this.currentButton.addEventListener('click', this.revealNotes.bind(this));
  // fill chord array
  allChords.push(this);
}

Chord.prototype.handleClick = function() {
  // store audio tags in variables
  const x = document.getElementById(this.audioId_1);
  const y = document.getElementById(this.audioId_2);
  const z = document.getElementById(this.audioId_3);
  // load audio tag files
  x.load();
  y.load();
  z.load();
  // play audio tag files
  x.play();
  y.play();
  z.play();
}

Chord.prototype.revealNotes = function() {
  for (let note of noteArray) {
    note.setAttribute('class', 'hidden text');
  }
   // construct note button ID's
   this.buttonName1 = `button${this.noteName1}`;
   this.buttonName2 = `button${this.noteName2}`;
   this.buttonName3 = `button${this.noteName3}`;
   // scope note buttons by ID
   this.currentButton1 = document.getElementById(this.buttonName1);
   this.currentButton2 = document.getElementById(this.buttonName2);
   this.currentButton3 = document.getElementById(this.buttonName3);
   // scope p tags within note buttons
   this.paragraphTag1 = this.currentButton1.firstElementChild;
   this.paragraphTag2 = this.currentButton2.firstElementChild;
   this.paragraphTag3 = this.currentButton3.firstElementChild;
   // display note text in p tag
   this.paragraphTag1.setAttribute('class', 'shown text');
   this.paragraphTag2.setAttribute('class', 'shown text');
   this.paragraphTag3.setAttribute('class', 'shown text');
}




/////////////////////////INSTANTIATE NOTE AND CHORD OBJECTS////////////////////////////////

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

// major chords
new Chord('CMajor', 'C', 'E', 'G');
new Chord('CSMajor', 'CS', 'F', 'GS');
new Chord('DMajor', 'D', 'FS', 'A');
new Chord('DSMajor', 'DS', 'G', 'AS');
new Chord('EMajor', 'E', 'GS', 'B');
new Chord('FMajor', 'F', 'A', 'C');
new Chord('FSMajor', 'FS', 'AS', 'CS');
new Chord('GMajor', 'G', 'B', 'D');
new Chord('GSMajor', 'GS', 'C', 'DS');
new Chord('AMajor', 'A', 'CS', 'E');
new Chord('ASMajor', 'AS', 'D', 'F');
new Chord('BMajor', 'B', 'DS', 'FS');

// minor chords
new Chord('Cminor', 'C', 'F', 'G');
new Chord('CSminor', 'CS', 'FS', 'GS');
new Chord('Dminor', 'D', 'G', 'A');
new Chord('DSminor', 'DS', 'GS', 'AS');
new Chord('Eminor', 'E', 'A', 'B');
new Chord('Fminor', 'F', 'AS', 'C');
new Chord('FSminor', 'FS', 'B', 'CS');
new Chord('Gminor', 'G', 'C', 'D');
new Chord('GSminor', 'GS', 'CS', 'DS');
new Chord('Aminor', 'A', 'D', 'E');
new Chord('ASminor', 'AS', 'DS', 'F');
new Chord('Bminor', 'B', 'E', 'FS');


// update local storage
localStorageUpdate();