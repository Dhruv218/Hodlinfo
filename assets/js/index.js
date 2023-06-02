function getvalue(){
    var selectElement=document.getElementById('currency-selector')
    var selectedValue = selectElement.value;
  var target=document.getElementById(selectedValue+'/INR')
var all=document.querySelectorAll('.currency-choice')
for(let i=0;i<all.length;i++){
    all[i].style.display='none'
}
target.style.display='block';
}
window.onload=()=>{
    getvalue();
}

if ($("#revese-timer").length) {
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 20;
  const ALERT_THRESHOLD = 15;

  const COLOR_CODES = {
    info: {
      color: "green",
    },
    warning: {
      color: "green",
      threshold: WARNING_THRESHOLD,
    },
    alert: {
      color: "green",
      threshold: ALERT_THRESHOLD,
    },
  };

  var Minute = $("#revese-timer").data("minute");
  var Seconds = Math.round(60 * Minute);
  const TIME_LIMIT = Seconds;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;

  document.getElementById("revese-timer").innerHTML = `
	<div class="base-timer">
	  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
	    <g class="base-timer__circle">
	      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
	      <path
	        id="base-timer-path-remaining"
	        stroke-dasharray="283"
	        class="base-timer__path-remaining ${remainingPathColor}"
	        d="
	          M 50, 50
	          m -45, 0
	          a 45,45 0 1,0 90,0
	          a 45,45 0 1,0 -90,0
	        "
	      ></path>
	    </g>
	  </svg>
	  <span id="base-timer-label" class="base-timer__label">${formatTime(
      timeLeft
    )}</span>
	</div>
	`;

  startTimer();

  function onTimesUp() {
    timePassed = 0;
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById("base-timer-label").innerHTML =
        formatTime(timeLeft);
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }

  function formatTime(time) {
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${seconds}`;
  }

  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
}
var d = document.querySelectorAll(".light-theme-text");
var l = document.querySelectorAll(".light-theme");
var l_v2 = document.querySelectorAll(".light-theme-v2");
var d_v2 = document.querySelectorAll(".light-theme-text-v2");
document.querySelectorAll(".slider")[0].addEventListener("click", function () {
  for (let i = 0; i < d.length; i++) {
    if (d[i].classList.contains("light-theme-text")) {
      d[i].classList.remove("light-theme-text");
      d[i].classList.add("black-theme-text");
      document.querySelector(".base-timer__label").style.color = "white";
    } else {
      d[i].classList.add("light-theme-text");
      d[i].classList.remove("black-theme-text");
      document.querySelector(".base-timer__label").style.color = "black";
    }
  }
  for (let i = 0; i < d_v2.length; i++) {
    if (d_v2[i].classList.contains("light-theme-text-v2")) {
      d_v2[i].classList.remove("light-theme-text-v2");
      d_v2[i].classList.add("black-theme-text-v2");
    } else {
      d_v2[i].classList.add("light-theme-text-v2");
      d_v2[i].classList.remove("black-theme-text-v2");
    }
  }
  for (let i = 0; i < l.length; i++) {
    if (l[i].classList.contains("light-theme")) {
      l[i].classList.remove("light-theme");
      l[i].classList.add("black-theme");
    } else {
      l[i].classList.add("light-theme");
      l[i].classList.remove("black-theme");
    }
  }
  for (let i = 0; i < l_v2.length; i++) {
    if (l_v2[i].classList.contains("light-theme-v2")) {
      l_v2[i].classList.remove("light-theme-v2");
      l_v2[i].classList.add("black-theme-v2");
    } else {
      l_v2[i].classList.add("light-theme-v2");
      l_v2[i].classList.remove("black-theme-v2");
    }
  }
});
