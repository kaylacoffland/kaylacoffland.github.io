
//variables go up here
let vid;

function preload(){
  vid = createVideo('assets/walk.mp4');

  //stuff to prepare gets done here
}

function setup() {
  createCanvas(1920, 1080);
  vid.position (100,600)
//things to establish the "sandbox" go here
}

function draw() {
  background(17, 203, 215);
  vid.loop();
  //think of this area as a looping function that continuall puts things on screen, in order
}

function mousePressed() {
if(vid.isPlaying()) {
  vid.stop();
}
else {
  vid.play();
}
  //what happens when I click?
  if (sound.isPlaying()) {
    sound.stop();
  }
  else {
    sound.play();
    }
  }
