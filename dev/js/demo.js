import $ from "jquery";
import {gsap} from "gsap";


var redBox = $('.red-box');
var blueBox = $('.blue-box');
var orangeBox = $('.orange-box');

var boxArray = [redBox, blueBox, orangeBox];

// only here to make codeKit be quiet!
console.log(gsap);
$(document).ready(function(){

    console.log('Page loaded');

    //gsap.to(element,{vars})

    //methods
    //.to
    //.from
    //.fromTo

    //gsap.to(redBox ,{duration:0.5, x:300});
    //gsap.from(redBox ,{duration:0.5, x:300});
    //gsap.fromTo(redBox ,{x:100} ,{duration:0.5, x:500});
    //gsap.to(boxArray ,{duration:0.5, x:300, delay:1});
    //gsap.to(boxArray ,{duration:0.5, x:300, opacity:0.5});

    //transforms : x, y, scale, scaleY, scaleX, roations, skewX, skewY
    //opacity, alpha, autoAlpha

    //absolute vs. relative
    //gsap.set(redBox ,{x:500});
    //gsap.set(blueBox ,{x:300});
    //gsap.set(orangeBox ,{x:100});
    //gsap.to(redBox, {duration: 0.5, x:300});
    //gsap.to(redBox, {duration: 0.5, x:"+=300"});
    //gsap.to( redBox,{duration:0.5, rotation:"-=40"})

    //special properties
    // duration, callbacks, easing, staggers, repest, yoyo, repeatDelay
    //gsap.to(blueBox, {duration: 0.5, x:300, repeat:7, yoyo:true, repeatDelay:1});
    //forever
    //gsap.to(blueBox, {duration: 0.5, x:300, repeat:-1, yoyo:true, repeatDelay:1});

    //origin
    //gsap.set(blueBox, { x:400});
    //gsap.to(blueBox ,{duration:2, skewY:20});
    //gsap.to(blueBox ,{duration:1, roation:"100-cw", transformOrigin:"100px 200px"});

    //easing
    //https://greensock.com/ease-visualizer
    //gsap.to(blueBox ,{duration: 1, x:300, ease:"back.out(5)"});
    //gsap.to(blueBox ,{duration:2 , x:300, ease:"power4.out"});
    //gsap.to(blueBox ,{duration:2 , x:300, ease:"elastic.out(1,0,3)"});
    
    //stagger
    //old way
    //gsap.to(redBox ,{duration:2 , x:400, ease:"expo.out", delay:1});
    //gsap.to(blueBox ,{duration:2 , x:400, ease:"expo.out",  delay:2});
    //gsap.to(orangeBox ,{duration:2 , x:400, ease:"expo.out",  delay:3});
    //better ways
    //stagger, theres also a welside link
    //gsap.to(boxArray ,{duration:0.5, x:300, opacity:0.5, stagger:1});
    //gsap.to(boxArray ,{duration:0.5, x:300, opacity:0.5, stagger:{each:0.5}});
    gsap.to(boxArray ,{duration:0.5, x:300, opacity:0.5, stagger:{amount:1, from:"random"}});


});