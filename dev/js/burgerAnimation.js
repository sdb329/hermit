import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#burger",{transformOrigin:"center"});
// gsap.set("#top",{drawSVG: "0% 37%"});
gsap.set("#bottom1",{drawSVG: "0% 48%"});
// gsap.set("#circle-svg",{scale: .2, transformOrigin:"right center", y: "-=400", x: ""});
// gsap.set("#circle-svg",{scale: 1, y: "-=30", x: "+=30"});
gsap.set("#circle-svg",{y: "-=170vh", scale: 4});
gsap.set("#circle-svg2",{y: "-=170vh", scale: 4});
gsap.set("#circle-top",{y: "-=100vh"});
    






// gsap.set("#burger",{rotate:90});



// export const circleNone = new gsap.timeline({paused:true});
// circleNone.to("#circle-svg", {display: "none"});

// export const circleShow = new gsap.timeline({paused:true});
// circleShow.to("#circle-svg", {display: "list-item"});


export const circleTL = new gsap.timeline({paused:true});
circleTL.to("#circle-svg2", {duration:2, y: "+=150vh", scale: 4})
circleTL.to("#circle-svg", {duration:2, y: "+=150vh", scale: 4}, "-=2.3")
// circleTL.to("#circle-cover", {duration: 2, color: '#E3BCBA'})

// circleTL.to("#circle-top", {duration:2, y: "+=70vh", scale: 1.5});
// circleTL.to("#circle-svg", {duration:1, scale: 50});


const bottomTL = new gsap.timeline();
bottomTL.to("#bottom1",{duration:0.25, drawSVG: "47% 100%"})
.to("#bottom1",{duration:0.25});

export const burgerTL = new gsap.timeline({paused:true});

burgerTL
   
    .add(bottomTL,"burger");
    




    
export const burgerJumpTL = new gsap.timeline({paused:true});
burgerJumpTL.to("#bottom1", {y:"12", repeat:-1, yoyo:true});









    
