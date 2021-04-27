'use strict';

// recording
let recording = false;
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
function handleClickCMajor(){
  playChord("C3Note", "E3Note", "G3Note");
}

function handleClickCSMajor(){
  playChord("CS3Note", "F3Note", "GS3Note");
}

function handleClickDMajor(){
  playChord("D3Note", "FS3Note", "A3Note");
}

function handleClickDSMajor(){
  playChord("DS3Note", "G3Note", "AS3Note");
}

function handleClickEMajor(){
  playChord("E3Note", "GS3Note", "BNote");
}

function handleClickFMajor(){
  playChord("F3Note", "A3Note", "C3Note");
}

function handleClickFSMajor(){
  playChord("FS3Note", "AS3Note", "CS3Note");
}

function handleClickGMajor(){
  playChord("G3Note", "B3Note", "D3Note");
}

function handleClickGSMajor(){
  playChord("GS3Note", "C3Note", "DS3Note");
}

function handleClickAMajor(){
  playChord("A3Note", "CS3Note", "E3Note");
}

function handleClickASMajor(){
  playChord("AS3Note", "D3Note", "F3Note");
}

function handleClickBMajor(){
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