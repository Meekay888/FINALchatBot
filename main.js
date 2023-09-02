function chat() {
    // greet the user
  alert("Ola!");
  
  // ask their name
  var name = prompt("What is your name?");
  alert("Hello, " +  "name");
  
  // ask their fave food
  var food = prompt("What is your favorite food?");
  alert("I like, "  +  food   +   "too!");
  
  // ask if they would like to share their food
  var shareFood = confirm("Tara! Lets Eat?");
  
  // If the user clicks "OK"
  if (shareFood == true) {
    alert("Thank you!");
  }
  
  // If the user clicks "cancel"
  else {
    alert("See You Next Time!");
  }
  }