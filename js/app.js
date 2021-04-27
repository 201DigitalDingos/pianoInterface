'use strict';

// recording
let recording = false;

const recordButton = document.getElementById("record");

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

function toggleRecord() {
  recording = !(recording);
  console.log(recording);
  if (recording) {
    recordingArray = [];
  }
}

// keys
const buttonAS = document.getElementById("buttonAS3");
const buttonA = document.getElementById("buttonA3");
const buttonB = document.getElementById("buttonB3");
const buttonCS = document.getElementById("buttonCS3");
const buttonC = document.getElementById("buttonC3");
const buttonDS = document.getElementById("buttonDS3");
const buttonD = document.getElementById("buttonD3");
const buttonE = document.getElementById("buttonE3");
const buttonFS = document.getElementById("buttonFS3");
const buttonF = document.getElementById("buttonF3");
const buttonGS = document.getElementById("buttonGS3");
const buttonG = document.getElementById("buttonG3");

// chords
const cMajorButton = document.getElementById("CMajor");

// keys event listeners
buttonAS.addEventListener('click', handleClickAS);
buttonA.addEventListener('click', handleClickA);
buttonB.addEventListener('click', handleClickB);
buttonCS.addEventListener('click', handleClickCS);
buttonC.addEventListener('click', handleClickC);
buttonDS.addEventListener('click', handleClickDS);
buttonD.addEventListener('click', handleClickD);
buttonE.addEventListener('click', handleClickE);
buttonFS.addEventListener('click', handleClickFS);
buttonF.addEventListener('click', handleClickF);
buttonGS.addEventListener('click', handleClickGS);
buttonG.addEventListener('click', handleClickG);

// chords event listeners
cMajorButton.addEventListener('click', handleClickCMajor);

// function to play notes
function playNote(ElemID) {
  if (recording === true) {
    recordingArray.push(ElemID);
    let recordedStorage = JSON.stringify(recordingArray);
    localStorage.setItem(`storedKeys`, recordedStorage);
  }
  const x = document.getElementById(ElemID);
  x.load();
  x.play();
}

// Event listener for playback button
const playbackButton = document.getElementById("playback");

playbackButton.addEventListener('click', handlePlayback);

function handlePlayback() {
  for (let note of recordingArray) {
    const x = document.getElementById(note);
    x.play();
  }
}

// AS
function handleClickAS() {
  playNote("AS3Note");
}

// A
function handleClickA() {
  playNote("A3Note");
}

// B
function handleClickB() {
  playNote("B3Note");
}

// CS
function handleClickCS() {
  playNote("CS3Note");
}

// C
function handleClickC() {
  playNote("C3Note");
}

// DS
function handleClickDS() {
  playNote("DS3Note");
}

// D
function handleClickD() {
  playNote("D3Note");
}

// E
function handleClickE() {
  playNote("E3Note");
}

// FS
function handleClickFS() {
  playNote("FS3Note");
}

// F
function handleClickF() {
  playNote("F3Note");
}

// GS
function handleClickGS() {
  playNote("GS3Note");
}

// G
function handleClickG() {
  playNote("G3Note");
}

// C Major chord
function handleClickCMajor() {
  const x = document.getElementById("C3Note");
  const y = document.getElementById("E3Note");
  const z = document.getElementById("G3Note");
  x.play();
  y.play();
  z.play();
}

localStorageUpdate();