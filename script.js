$(document).ready(function () {
  $("#showTimeBtn").click(function () {
    const now = new Date();

    // Format time nicely
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    const dateString = now.toLocaleDateString();

    // Optional: Greeting message
    let greeting = "Hello!";
    if (now.getHours() < 12) greeting = "Good Morning!";
    else if (now.getHours() < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";

       let greeting2 = "Hello!";
    if (now.getHours() < 12) greeting = "Good Morning!";
    else if (now.getHours() < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";

    $("#timeDisplay")
      .hide()
      .html(`<strong>${greeting}</strong><br>Today is ${dateString}<br>Current time: ${timeString}`)
      .fadeIn("slow");
      let greeting1 = "Hello!";
    if (now.getHours() < 12) greeting = "Good Morning!";
    else if (now.getHours() < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";

    $("#timeDisplay")
      .hide()
      .html(`<strong>${greeting}</strong><br>Today is ${dateString}<br>Current time: ${timeString}`)
      .fadeIn("slow");
  });
});

