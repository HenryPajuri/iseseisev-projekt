const E4GuitarChord = new Audio("./Guitar/sounds/E4.mp3");
const F4GuitarChord = new Audio("./Guitar/sounds/F4.mp3");
const Gb4GuitarChord = new Audio("./Guitar/sounds/Gb4.mp3");
const G4GuitarChord = new Audio("./Guitar/sounds/G4.mp3");
const Ab4GuitarChord = new Audio("./Guitar/sounds/Ab4.mp3");
const A4GuitarChord = new Audio("./Guitar/sounds/A4.mp3");
const Bb4GuitarChord = new Audio("./Guitar/sounds/Bb4.mp3");
const B4GuitarChord = new Audio("./Guitar/sounds/B4.mp3");
const C5GuitarChord = new Audio("./Guitar/sounds/C5.mp3");
const Db5GuitarChord = new Audio("./Guitar/sounds/Db5.mp3");
const D5GuitarChord = new Audio("./Guitar/sounds/D5.mp3");
const Eb5GuitarChord = new Audio("./Guitar/sounds/Eb5.mp3");
const E5GuitarChord = new Audio("./Guitar/sounds/E5.mp3");


const Em4GuitarChord = new Audio("./Guitar/sounds/Em4.mp3");
const Fm4GuitarChord = new Audio("./Guitar/sounds/Fm4.mp3");
const Gbm4GuitarChord = new Audio("./Guitar/sounds/Gbm4.mp3");
const Gm4GuitarChord = new Audio("./Guitar/sounds/Gm4.mp3");
const Abm4GuitarChord = new Audio("./Guitar/sounds/Abm4.mp3");
const Am4GuitarChord = new Audio("./Guitar/sounds/Am4.mp3");
const Bbm4GuitarChord = new Audio("./Guitar/sounds/Bbm4.mp3");
const Bm4GuitarChord = new Audio("./Guitar/sounds/Bm4.mp3");
const Cm5GuitarChord = new Audio("./Guitar/sounds/Cm5.mp3");
const Dbm5GuitarChord = new Audio("./Guitar/sounds/Dbm5.mp3");
const Dm5GuitarChord = new Audio("./Guitar/sounds/Dm5.mp3");
const Ebm5GuitarChord = new Audio("./Guitar/sounds/Ebm5.mp3");
const Em5GuitarChord = new Audio("./Guitar/sounds/Em5.mp3");

const playChordSound = (audio) => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.95), 1950);
  setTimeout(() => (clone.volume = 0.975), 1975);
  setTimeout(() => (clone.volume = 0.9), 2000);
  setTimeout(() => (clone.volume = 0.875), 2175);
  setTimeout(() => (clone.volume = 0.85), 2150);
  setTimeout(() => (clone.volume = 0.825), 2125);
  setTimeout(() => (clone.volume = 0.8), 2100);
  setTimeout(() => (clone.volume = 0.75), 2175);
  setTimeout(() => (clone.volume = 0.7), 2200);
  setTimeout(() => (clone.volume = 0.65), 2250);
  setTimeout(() => (clone.volume = 0.6), 2300);
  setTimeout(() => (clone.volume = 0.55), 2350);
  setTimeout(() => (clone.volume = 0.5), 2400);
  setTimeout(() => (clone.volume = 0.475), 2425);
  setTimeout(() => (clone.volume = 0.45), 2450);
  setTimeout(() => (clone.volume = 0.4), 2500);
  setTimeout(() => (clone.volume = 0.35), 2550);
  setTimeout(() => (clone.volume = 0.3), 2600);
  setTimeout(() => (clone.volume = 0.325), 2675);
  setTimeout(() => (clone.volume = 0.25), 2650);
  setTimeout(() => (clone.volume = 0.2), 2700);
  setTimeout(() => (clone.volume = 0.175), 2725);
  setTimeout(() => (clone.volume = 0.15), 2750);
  setTimeout(() => (clone.volume = 0.125), 2800);
  setTimeout(() => (clone.volume = 0.1), 2825);
  setTimeout(() => (clone.volume = 0.025), 2850);
  setTimeout(() => (clone.volume = 0.05), 2875);
  setTimeout(() => (clone.volume = 0), 2900);
};
//MAJOR
// E4
const E4Chord = document.querySelector(".E4-Chord");
const playE4Chord = () => {
  playChordSound(E4GuitarChord);
  E4Chord.classList.add("active");
  setTimeout(() => E4Chord.classList.remove("active"), 200);
};
E4Chord.addEventListener("click", playE4Chord);

// F4
const F4Chord = document.querySelector(".F4-Chord");
const playF4Chord = () => {
  playChordSound(F4GuitarChord);
  F4Chord.classList.add("active");
  setTimeout(() => F4Chord.classList.remove("active"), 200);
};
F4Chord.addEventListener("click", playF4Chord);

// Gb4
const Gb4Chord = document.querySelector(".Gb4-Chord");
const playGb4Chord = () => {
  playChordSound(Gb4GuitarChord);
  Gb4Chord.classList.add("active");
  setTimeout(() => Gb4Chord.classList.remove("active"), 200);
};
Gb4Chord.addEventListener("click", playGb4Chord);

// G4
const G4Chord = document.querySelector(".G4-Chord");
const playG4Chord = () => {
  playChordSound(G4GuitarChord);
  G4Chord.classList.add("active");
  setTimeout(() => G4Chord.classList.remove("active"), 200);
};
G4Chord.addEventListener("click", playG4Chord);

// Ab4
const Ab4Chord = document.querySelector(".Ab4-Chord");
const playAb4Chord = () => {
  playChordSound(Ab4GuitarChord);
  Ab4Chord.classList.add("active");
  setTimeout(() => Ab4Chord.classList.remove("active"), 200);
};
Ab4Chord.addEventListener("click", playAb4Chord);

// A4
const A4Chord = document.querySelector(".A4-Chord");
const playA4Chord = () => {
  playChordSound(A4GuitarChord);
  A4Chord.classList.add("active");
  setTimeout(() => A4Chord.classList.remove("active"), 200);
};
A4Chord.addEventListener("click", playA4Chord);

// Bb4
const Bb4Chord = document.querySelector(".Bb4-Chord");
const playBb4Chord = () => {
  playChordSound(Bb4GuitarChord);
  Bb4Chord.classList.add("active");
  setTimeout(() => Bb4Chord.classList.remove("active"), 200);
};
Bb4Chord.addEventListener("click", playBb4Chord);

// B4
const B4Chord = document.querySelector(".B4-Chord");
const playB4Chord = () => {
  playChordSound(B4GuitarChord);
  B4Chord.classList.add("active");
  setTimeout(() => B4Chord.classList.remove("active"), 200);
};
B4Chord.addEventListener("click", playB4Chord);

// C5
const C5Chord = document.querySelector(".C5-Chord");
const playC5Chord = () => {
  playChordSound(C5GuitarChord);
  C5Chord.classList.add("active");
  setTimeout(() => C5Chord.classList.remove("active"), 200);
};
C5Chord.addEventListener("click", playC5Chord);

// Db5
const Db5Chord = document.querySelector(".Db5-Chord");
const playDb5Chord = () => {
  playChordSound(Db5GuitarChord);
  Db5Chord.classList.add("active");
  setTimeout(() => Db5Chord.classList.remove("active"), 200);
};
Db5Chord.addEventListener("click", playDb5Chord);

// D5
const D5Chord = document.querySelector(".D5-Chord");
const playD5Chord = () => {
  playChordSound(D5GuitarChord);
  D5Chord.classList.add("active");
  setTimeout(() => D5Chord.classList.remove("active"), 200);
};
D5Chord.addEventListener("click", playD5Chord);

// Eb5
const Eb5Chord = document.querySelector(".Eb5-Chord");
const playEb5Chord = () => {
  playChordSound(Eb5GuitarChord);
  Eb5Chord.classList.add("active");
  setTimeout(() => Eb5Chord.classList.remove("active"), 200);
};
Eb5Chord.addEventListener("click", playEb5Chord);

// E5
const E5Chord = document.querySelector(".E5-Chord");
const playE5Chord = () => {
  playChordSound(E5GuitarChord);
  E5Chord.classList.add("active");
  setTimeout(() => E5Chord.classList.remove("active"), 200);
};
E5Chord.addEventListener("click", playE5Chord);

window.addEventListener("keydown", ({ keyCode }) => {
  if (keyCode === 20) return playE4Chord();
  if (keyCode === 65) return playF4Chord();
  if (keyCode === 83) return playGb4Chord();
  if (keyCode === 68) return playG4Chord();
  if (keyCode === 70) return playAb4Chord();
  if (keyCode === 71) return playA4Chord();
  if (keyCode === 72) return playBb4Chord();
  if (keyCode === 74) return playB4Chord();
  if (keyCode === 75) return playC5Chord();
  if (keyCode === 76) return playD5Chord();
  if (keyCode === 186) return playDb5Chord();
  if (keyCode === 191) return playEb5Chord();
  if (keyCode === 13) return playE5Chord();
});


//MINOR

// Em4
const Em4Chord = document.querySelector(".Em4-Chord");
const playEm4Chord = () => {
  playChordSound(Em4GuitarChord);
  Em4Chord.classList.add("active");
  setTimeout(() => Em4Chord.classList.remove("active"), 200);
};
Em4Chord.addEventListener("click", playEm4Chord);

// Fm4
const Fm4Chord = document.querySelector(".Fm4-Chord");
const playFm4Chord = () => {
  playChordSound(Fm4GuitarChord);
  Fm4Chord.classList.add("active");
  setTimeout(() => Fm4Chord.classList.remove("active"), 200);
};
Fm4Chord.addEventListener("click", playFm4Chord);

// Gbm4
const Gbm4Chord = document.querySelector(".Gbm4-Chord");
const playGbm4Chord = () => {
  playChordSound(Gbm4GuitarChord);
  Gbm4Chord.classList.add("active");
  setTimeout(() => Gbm4Chord.classList.remove("active"), 200);
};
Gbm4Chord.addEventListener("click", playGbm4Chord);

// Gm4
const Gm4Chord = document.querySelector(".Gm4-Chord");
const playGm4Chord = () => {
  playChordSound(Gm4GuitarChord);
  Gm4Chord.classList.add("active");
  setTimeout(() => Gm4Chord.classList.remove("active"), 200);
};
Gm4Chord.addEventListener("click", playGm4Chord);

// Abm4
const Abm4Chord = document.querySelector(".Abm4-Chord");
const playAbm4Chord = () => {
  playChordSound(Abm4GuitarChord);
  Abm4Chord.classList.add("active");
  setTimeout(() => Abm4Chord.classList.remove("active"), 200);
};
Abm4Chord.addEventListener("click", playAbm4Chord);

// Am4
const Am4Chord = document.querySelector(".Am4-Chord");
const playAm4Chord = () => {
  playChordSound(Am4GuitarChord);
  Am4Chord.classList.add("active");
  setTimeout(() => Am4Chord.classList.remove("active"), 200);
};
Am4Chord.addEventListener("click", playAm4Chord);

// Bbm4
const Bbm4Chord = document.querySelector(".Bbm4-Chord");
const playBbm4Chord = () => {
  playChordSound(Bbm4GuitarChord);
  Bbm4Chord.classList.add("active");
  setTimeout(() => Bbm4Chord.classList.remove("active"), 200);
};
Bbm4Chord.addEventListener("click", playBbm4Chord);

// Bm4
const Bm4Chord = document.querySelector(".Bm4-Chord");
const playBm4Chord = () => {
  playChordSound(Bm4GuitarChord);
  Bm4Chord.classList.add("active");
  setTimeout(() => Bm4Chord.classList.remove("active"), 200);
};
Bm4Chord.addEventListener("click", playBm4Chord);

// Cm5
const Cm5Chord = document.querySelector(".Cm5-Chord");
const playCm5Chord = () => {
  playChordSound(Cm5GuitarChord);
  Cm5Chord.classList.add("active");
  setTimeout(() => Cm5Chord.classList.remove("active"), 200);
};
Cm5Chord.addEventListener("click", playCm5Chord);

// Dbm5
const Dbm5Chord = document.querySelector(".Dbm5-Chord");
const playDbm5Chord = () => {
  playChordSound(Dbm5GuitarChord);
  Dbm5Chord.classList.add("active");
  setTimeout(() => Dbm5Chord.classList.remove("active"), 200);
};
Dbm5Chord.addEventListener("click", playDbm5Chord);

// Dm5
const Dm5Chord = document.querySelector(".Dm5-Chord");
const playDm5Chord = () => {
  playChordSound(Dm5GuitarChord);
  Dm5Chord.classList.add("active");
  setTimeout(() => Dm5Chord.classList.remove("active"), 200);
};
Dm5Chord.addEventListener("click", playDm5Chord);

// Ebm5
const Ebm5Chord = document.querySelector(".Ebm5-Chord");
const playEbm5Chord = () => {
  playChordSound(Ebm5GuitarChord);
  Ebm5Chord.classList.add("active");
  setTimeout(() => Ebm5Chord.classList.remove("active"), 200);
};
Ebm5Chord.addEventListener("click", playEbm5Chord);

// Em5
const Em5Chord = document.querySelector(".Em5-Chord");
const playEm5Chord = () => {
  playChordSound(Em5GuitarChord);
  Em5Chord.classList.add("active");
  setTimeout(() => Em5Chord.classList.remove("active"), 200);
};
Em5Chord.addEventListener("click", playEm5Chord);

window.addEventListener("keydown", ({ keyCode }) => {
  if (keyCode === 17) return playEm4Chord();
  if (keyCode === 16) return playFm4Chord();
  if (keyCode === 90) return playGbm4Chord();
  if (keyCode === 88) return playGm4Chord();
  if (keyCode === 67) return playAbm4Chord();
  if (keyCode === 86) return playAm4Chord();
  if (keyCode === 66) return playBbm4Chord();
  if (keyCode === 78) return playBm4Chord();
  if (keyCode === 77) return playCm5Chord();
  if (keyCode === 188) return playDm5Chord();
  if (keyCode === 190) return playDbm5Chord();
  if (keyCode === 221) return playEbm5Chord();
  if (keyCode === 18) return playEm5Chord();
});