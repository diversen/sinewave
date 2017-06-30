function sinewave () {
    
    // Descriptions found on: https://en.wikipedia.org/wiki/Sine_wave
    // Measure of time. Not used. Only for description's sake. 
    this.time = 0;
    // the peak deviation of the function from zero
    this.amplitude = 1;
    //the ordinary frequency, the number of oscillations (cycles) that occur each second of time
    this.freq = 1; // 
    // the angular frequency, the rate of change of the function argument in units of radians per second
    this.getAngFreq = function (time) {
        return Math.PI*2 * time * this.freq;
    };
    
    // the phase, specifies (in radians) where in its cycle the oscillation is at t = 0.
    this.phase = Math.PI;
    
    // Get 'Y' position of 'time'
    this.getY = function (time) {
        var y= this.amplitude*Math.sin(this.getAngFreq(time)+this.phase);
        return y;
    }; 
}

module.exports = sinewave;