var sinewave = require ('./index.js');

// Use: require('sinewave') if you have used npm install --save sinewave

var s = new sinewave();
s.amplitude = 50;
s.freq = 4;
s.phase = Math.PI;

for(i=0; i< Math.PI*2; i=i+Math.PI/24) {
    console.log(s.getY(i));
}
