console.log("Program start");
alert("Hello JS");
document.write("<h2>My first JavaScript program</h2>");
document.write("<p>Here I will be practicing debugging methods for your pleasure.</p>");
console.log("Program end");

var visitor = prompt("What is your name?");
var message = "Hello " + visitor + ". Welcome to Treehouse.";
message += " We are so glad to meet you "; /** Here we are takeing the variable message and adding to it by using += this enables us to use less code **/
message += visitor;
message += ". Stop by anytime you like.";
document.write(message);
