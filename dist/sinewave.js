(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.sinewave = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])(1)
});