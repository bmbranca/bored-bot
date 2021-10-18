// "https://www.boredapi.com/api/activity";
// "https://apis.scrimba.com/bored/api/activity";
let btn = document.getElementById("button");

function fetchActivity() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("activity-name").textContent = data.activity;
      const msg = new SpeechSynthesisUtterance(data.activity);
      window.speechSynthesis.speak(msg);
    });
}

btn.addEventListener("click", fetchActivity);
