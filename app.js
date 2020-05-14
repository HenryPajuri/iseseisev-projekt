/*import Transport from 'Tone/core/Transport';
import Volume from 'Tone/component/Volume';
import Gain from 'Tone/component/Gain';
import * as Tone from "tone";*/
window.addEventListener("load", () => {
  // UPDATE: there is a problem in chrome with starting audio context
  //  before a user gesture. This fixes it.

  metronomeBpm = 120;
  document.documentElement.addEventListener("mousedown", () => {
    if (Tone.context.state !== "running") Tone.context.resume();
  });
  render();
  sequencer();

  $(function () {
    $("input[type='newMetronomeBpm']").prop("max", 2500);
  });

  $("#metronomePlay").keypress(function (e) {
    if (e.keyCode == 13) $("changeMetronomeValue").click();
  });
});

//console.clear();

function sequencer() {
  const synths = [new Tone.Synth(), new Tone.Synth(), new Tone.Synth()];

  synths[0].oscillator.type = "triangle";
  synths[1].oscillator.type = "sine";
  synths[2].oscillator.type = "square";

  const gain = new Tone.Gain(0.6);
  gain.toMaster();

  synths.forEach((synth) => synth.connect(gain));

  const $rows = document.querySelectorAll(".pattern"),
    notes = ["G2", "E2", "C2"];
  let index = 0;

  Tone.Transport.scheduleRepeat(repeat, "8n");
  Tone.Transport.bpm.value = metronomeBpm;
  Tone.Transport.start();

  function repeat(time) {
    let step = index % 8;
    for (let i = 0; i < $rows.length; i++) {
      let synth = synths[i],
        note = notes[i],
        $row = $rows[i],
        $input = $row.querySelector(`input:nth-child(${step + 1})`);
      if ($input.checked) synth.triggerAttackRelease(note, "8n", time);
    }
    index++;
  }
}
/*
function playSynth() {
  //create a synth and connect it to the master output (your speakers)
  var synth = new Tone.Synth().toMaster();

  //play a middle 'C' for the duration of an 8th note
  Tone.Transport.scheduleRepeat(repeat, "8n");
  Tone.Transport.bpm.value = metronomeBpm;
  Tone.Transport.start();

  function repeat(time) {
    $input = document.querySelector(".metronome");
    if ($input.checked) synth.triggerAttackRelease("C3", "8n", time);
  }
}
*/
/*function metronomeKeyPressed() {
  elapsedTime = 0;
  var synth = new Tone.Synth().toMaster();
  var clock = new Tone.Clock(function (time) {
    Tone.now();
    elapsedTime = Tone.Transport.seconds;

    new Tone.TransportRepeatEvent(synth, 1);
    synth.triggerAttackRelease("C3", "8n");
    Tone.Transport.TransportRepeatEvent(synth, 1);
    console.log(time);
    console.log(clock);
    console.log(elapsedTime);
  }, 1);

  //Tone.now();
  //elapsedTime = Tone.Transport.seconds;

  //stop then start transport
  //alert("keypressed");
  //Tone.Transport.stop(clock).start(clock);
}*/
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

window.addEventListener("keydown", ({ keyCode }) => {
  if (keyCode === 38) {
    sounds[0].currentTime = 0;
    sounds[0].play();
  }
});

window.addEventListener("keydown", ({ keyCode }) => {
  if (keyCode === 33) {
    sounds[1].currentTime = 0;
    sounds[1].play();
  }
});

window.addEventListener("keydown", ({ keyCode }) => {
  if (keyCode === 37) {
    sounds[2].currentTime = 0;
    sounds[2].play();
  }
});

window.addEventListener("keydown", ({ keyCode }) => {
  if (keyCode === 36) {
    sounds[3].currentTime = 0;
    sounds[3].play();
  }
});

window.addEventListener("keydown", ({ keyCode }) => {
  if (keyCode === 12) {
    sounds[4].currentTime = 0;
    sounds[4].play();
  }
});

window.addEventListener("keydown", ({ keyCode }) => {
  if (keyCode === 39) {
    sounds[5].currentTime = 0;
    sounds[5].play();
  }
});

/*
CODE THAT DOESN'T WORK

----------------------------------------------------------------------------------------
*/
let loopBeat;
let bassSynth;

function metronome() {
  bassSynth = new Tone.MembraneSynth().toMaster();

  var vol = new Tone.Volume(-100);
  bassSynth.chain(vol, Tone.Master);
 
  loopBeat = new Tone.Loop(sound, "4n");


  Tone.Transport.bpm.value = metronomeBpm;
  Tone.Transport.start();
  
  loopBeat.start(0);
  render();
}

function sound(time) {
  bassSynth.triggerAttackRelease("c1", "8n", time);
  console.log(time);
}
function stopSound(){
  loopBeat.stop(0);
}
function changeMetronomeValue() {
  //var metronomeDiv = document.getElementById('metronomeValue');
  var newMetronomeValue = document.getElementById("newMetronomeBpm").value;
  //metronomeDiv = newMetronomeValue;
  if (newMetronomeValue < 25000) {
    metronomeBpm = newMetronomeValue;
  } else {
    alert("Maximum value for the metronome is 25000, otherwise stuff's gonna break :)");
  }
  render();

  //metronomeDiv.setAttribute("value", "number");
  //document.getElementById("newMetronomeBpm").value = "16";
  //metronomeDiv.innerHTML.setAttribute(value, );
}

function render() {
  var metronomeDiv = document.getElementById("metronomeValue");
  metronomeDiv.innerHTML = metronomeBpm;
  Tone.Transport.bpm.value = metronomeBpm;

  //playSynth();
}

/*
-----------------------------------------------------------------------------------------

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

-------------------------------------------------------------------------------------
NOT WORKING SEQUENCER
*/

/*
function sequencer() {
  const kick = new Tone.Player("/drums/kick-big.wav").toMaster();
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
      snare.start();
    }
    index++;
  }
}
sequencer();
*/
