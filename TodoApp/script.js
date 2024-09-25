let ctr = 1;

function delEvent(ctr) {
  target = document.getElementById("todo-" + ctr);
  // target.parentNode.removeChild(target);   //<--- more complicated way, but better flow --->
  target.remove(); //easy way (inbuilt func) works both ways
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

    document.querySelector(".input").value = ""; //clears/resets the ".input".value every time u press the button
  }
  if(value==""){
    alert("Please enter a To-Do!")
  }
}




// GSAP --->
gsap.from(".cont", {
  y: 40,
  opacity: 0,
  delay: 0.5,
  duration: 1,
  scale: 1.03,
});

gsap.from("#logo", {
  y: -40,
  opacity: 0,
  delay: 1,
  duration: 1.2,
});

gsap.from(".footer-head", {
  y: -20,
  opacity: 0,

  scrollTrigger: {
    scroller: "body",
    trigger: ".footer-head h2",
    start: "top 80%",
    end: "bottom 70%",
    // scrub:1,
    // markers:true,
  },
});

gsap.from("#github", {
  x: -400,
  opacity: 0,
  delay: 0.8,
  duration: 1,
  rotate: 180,
  ease: "power3.out",

  scrollTrigger: {
    scroller: "body",
    trigger: ".footer-head h2",
    start: "top 85%",
    end: "bottom 70%",
    // scrub:1,
    // markers:true,
  },
});

gsap.from("#insta", {
  x: 400,
  opacity: 0,
  delay: 0.8,
  duration: 1,
  rotate: 180,
  ease: "power3.out",
  scrollTrigger: {
    scroller: "body",
    trigger: ".footer-head h2",
    start: "top 85%",
    end: "bottom 70%",
    // scrub:1,
    // markers:true,
  },
});

gsap.from("#linkedin", {
  y: 80,
  opacity: 0,
  delay: 0.8,
  duration: 1,
  rotate: 180,
  ease: "power3.out",
  scrollTrigger: {
    scroller: "body",
    trigger: ".footer-head h2",
    start: "top 85%",
    end: "bottom 70%",
    // scrub:1,
    // markers:true,
  },
});
