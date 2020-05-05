window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");

  console.log(sounds[0]);

  //sound
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });
});

function sequencer() {
  const kick = new Tone.Player("./drums/kick-big.wav").toMaster();
  const snare = new Tone.Player("snare-punch.wav").toMaster();
  let index = 0;

  //const kickInputs = document.querySelectorAll(".kick");
  //const snareInputs = document.querySelectorAll(".snare");
  Tone.Transport.scheduleRepeat(repeat, "8n");
  Tone.Transport.start();

  function repeat() {
    let step = index % 8;
    console.log(step);
    let kickInputs = document.querySelector(
      `.kick input:nth-child(${step + 1})`
    );
    if (kickInputs.checked) {
      kick.start();
    }
    index++;
  }
}
sequencer();

let loopBeat;
let bassSynth;

function setup() {
  alert("setup was clicked");
  bassSynth = new Tone.MembraneSynth().toMaster();

  loopBeat = new Tone.loop(song, "4n");

  Tone.Transport.bpm.value = 140;
  Tone.Transport.start();
  loopBeat.start(0);
}

function song(time) {
  bassSynth.triggerAttackRelease("c1", "8n", time);
  console.log(time);
}

/*
var synth = new Tone.PolySynth(3, Tone.Synth).toMaster();
var data = ["C", "D", "E", "F", "G", "A", "B"];
var html = "";

for (var octave = 0; octave < 2; octave++) {
  for (var i = 0; i < data.length; i++) {
    var note = data[i];
    var hasSharp = ["E", "B"].indexOf(note) == -1;

    html += `<div class='whitenote' onmousedown='noteDown(this, false)' onmouseup='noteUp(this,false)' onmouseleave='noteUp(this,false)' data-note='${
      note + (octave + 4)
    }'>`;

    if (hasSharp) {
      html += `<div class='blacknote' onmousedown='noteDown(this, true)' onmouseup='noteUp(this, true)' onmouseleave='noteUp(this,true)' data-note='${
        note + "#" + (octave + 4)
      }'>
           
      </div>`;
    }

    html += `</div>`;
  }
}

document.getElementById("container").innerHTML = html;

function noteUp(elem, isSharp) {
  elem.style.background = isSharp ? "#777" : "";
}

function noteDown(elem, isSharp) {
  var note = elem.dataset.note;

  elem.style.background = isSharp ? "black" : "#ccc";
  synth.triggerAttackRelease(note, "16n");
  event.stopPropagation();
}
*/