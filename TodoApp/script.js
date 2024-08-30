let ctr = 1;

function delEvent(ctr) {
  target = document.getElementById("todo-" + ctr);
  // target.parentNode.removeChild(target);   //much compicated way but better flow
  target.remove();   //both ways
}

function addEvent() {
  const value = document.querySelector(".input").value;
  if (value !== "") {
    const newEl = document.createElement("div");
    newEl.setAttribute("id", "todo-" + ctr);
    newEl.innerHTML =
      "<div id='newDiv'>" +
      value +
      "<button onclick='delEvent(" +
      ctr +
      ")' id='del-btn' >Delete</button> </div> ";
    target = document.querySelector(".output-child");
    target.parentNode.appendChild(newEl);
    ctr = ctr + 1;

    document.querySelector('.input').value="" //clears/resets the ".input".value every time u press the button

  }

}





//GSAP --->
gsap.from(".cont", {
  y:40,
  opacity: 0,
  delay: 0.5,
  duration: 1.5,
  scale:1.03,
})

  

gsap.from("#logo",{
  x:  40,
  opacity: 0,
  delay:1.5,
  duration: 1.2,
})


gsap.from(".footer-head",{
  y: -20,
  opacity:0,

  

  scrollTrigger: {
    scroller: "body",
    trigger: ".footer-head h2",
    start: "top 80%",
    end: "bottom 70%",
    scrub:1,
    // markers:true,
}


})

gsap.from("#github",{
  x:  -400,
  opacity: 0,
  delay:1.5,
  duration: 1.2,
  rotate:180,

  scrollTrigger: {
    scroller: "body",
    trigger: ".icons",
    start: "top 80%",
    end: "bottom 95%",
    scrub:0,
    // markers:true,
}
})


gsap.from("#insta",{
  x:  400,
  opacity: 0,
  delay:1.5,
  duration: 1.2,
  rotate:180,

  scrollTrigger: {
    scroller: "body",
    trigger: ".icons",
    start: "top 80%",
    end: "bottom 95%",
    scrub:0,
    // markers:true,
}
})

gsap.from("#linkedin",{
  y:  80,
  opacity: 0,
  delay:1.5,
  duration: 1.2,
  rotate:180,

  scrollTrigger: {
    scroller: "body",
    trigger: ".icons",
    start: "top 80%",
    end: "bottom 95%",
    scrub:0,
    // markers:true,
}
})

