import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#intro", "#food", "#shell", "#life", "#end"];






export function scrollPage(index){

gsap.to(window, {duration: 3, scrollTo:{y:idArray[index],offsetY: 120}});


}