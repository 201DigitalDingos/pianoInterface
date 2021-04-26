'use strict';

// keys
const buttonAS = document.getElementById("buttonAS");
const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonCS = document.getElementById("buttonCS");
const buttonC = document.getElementById("buttonC");
const buttonDS = document.getElementById("buttonDS");
const buttonD = document.getElementById("buttonD");
const buttonE = document.getElementById("buttonE");
const buttonFS = document.getElementById("buttonFS");
const buttonF = document.getElementById("buttonF");
const buttonGS = document.getElementById("buttonGS");
const buttonG = document.getElementById("buttonG");

// chords
const cMajorButton = document.getElementById("CMajor");

// keys
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

// chords
cMajorButton.addEventListener('click', handleClickCMajor);

// AS
function handleClickAS() {
  const x = document.getElementById("AS3Note");
  x.play();
}

// A
function handleClickA() {
  const x = document.getElementById("A3Note");
  x.play();
}

// B
function handleClickB() {
  const x = document.getElementById("B3Note");
  x.play();
}

// CS
function handleClickCS() {
  const x = document.getElementById("CS3Note");
  x.play();
}

// C
function handleClickC() {
  const x = document.getElementById("C3Note");
  x.play();
}

// DS
function handleClickDS() {
  const x = document.getElementById("DS3Note");
  x.play();
}

// D
function handleClickD() {
  const x = document.getElementById("D3Note");
  x.play();
}

// E
function handleClickE() {
  const x = document.getElementById("E3Note");
  x.play();
}

// FS
function handleClickFS() {
  const x = document.getElementById("FS3Note");
  x.play();
}

// F
function handleClickF() {
  const x = document.getElementById("F3Note");
  x.play();
}

// GS
function handleClickGS() {
  const x = document.getElementById("GS3Note");
  x.play();
}

// G
function handleClickG() {
  const x = document.getElementById("G3Note");
  x.play();
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