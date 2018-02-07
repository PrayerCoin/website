var icoDate = new Date("February 9, 2018 10:00:00 ").getTime();

var countdown = document.getElementById("countdown");

var UPDATE_TIMEOUT = setTimeout(update, 1000);

function update() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = icoDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  countdown.innerHTML = days + "d " + hours + "h "
  + minutes + "m ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(UPDATE_TIMEOUT);
    countdown.innerHTML = "ICO Live! Please Refresh";
  }
}

update();

