function checkSpeed() {
  const speed = document.getElementById("speed").value;
  let points = 0;

  if (speed < 70) {
    points = 0;
  } else {
    points = Math.floor((speed - 70) / 5);
  }

  if (points > 12) {
    document.getElementById("points").innerHTML = "License suspended";
  } else {
    document.getElementById("points").innerHTML = "Points: " + points;
  }
}