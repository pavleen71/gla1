document.addEventListener("DOMContentLoaded", function () {
  document.body.style.backgroundColor = "#a8eb7f";
  document.body.style.padding = "4vw";

  document.body.style.textAlign = "center";

  //display full name inside h1 element
  a = document.createElement("h1");
  document.body.appendChild(a);
  a.id = "name";
  a.innerText = "Pavleen Kaur";
  a.style.textAlign = "center";
  a.style.color = "gray";
  a.style.fontFamily = "Arial, Helvetica, sans-serif";
  //creating and appending two input boxes 
  i1 = document.createElement("input");
  i2 = document.createElement("input");
  document.body.appendChild(i1);
  i1.id = "input1";
  i2.id = "input2";
  document.body.appendChild(i2);
  i1.style.margin = "3vw";
  i2.style.margin = "3vw";
  i1.style.height = "2vw";
  i2.style.height = "2vw";
  br = document.createElement("br");
  document.body.appendChild(br);
  //creating and appending button 
  b = document.createElement("button");
  document.body.appendChild(b);
  b.style.padding = "1vw";
  b.style.height = "4vw";
  b.style.fontSize = "2vw";
  b.innerText = "ADD";
  b.style.backgroundColor = "rgb(42, 125, 192)";
  b.style.color = " #fff";
  b.style.border = "none";
  b.style.cursor = "pointer";
  b.addEventListener('mouseover', () => {
    b.style.backgroundColor = "rgb(6, 95, 159)";
  });
  b.addEventListener('mouseout', () => {

    b.style.backgroundColor = "rgb(42, 125, 192)";
  });
  //when the button is clicked 
  b.addEventListener('click', () => {

    let sum = parseInt(i1.value) + parseInt(i2.value);
    var existingMessageContainer = document.getElementById("message-container");
    if (existingMessageContainer) {
      existingMessageContainer.remove();
    }
    messageContainer = document.createElement("p");
    messageContainer.id = "message-container";
    document.body.appendChild(messageContainer);
    // Validate input and display the sum
    if (validate(i1.value, i1) && validate(i2.value, i2)) {
      messageContainer.innerText = "Sum of " + parseInt(i1.value) + " and " + parseInt(i2.value) + " is " + sum;
    }
    // Style the message container
    messageContainer.style.border = "2px solid red";
    messageContainer.style.margin = "10vw";
    messageContainer.style.fontSize = "2vw";
    messageContainer.style.padding = "1vw";
    messageContainer.style.backgroundColor = "white";
    messageContainer.style.color = "black";

  });
  //arrow function to validate the input 
  const validate = (x, element) => {
    try {
      i1.style.border = "";
      i2.style.border = "";
      //if the user has inputted anything other than number 
      if (isNaN(x)) throw new Error(`${x} is not a valid number. Please try again using a number.`);
      //if the user has not entered anything in input and pressed the button 
      else if (x == "") throw new Error("Enter number in red box");
      return true;

    } catch (error) {
      //display the error message
      messageContainer.innerText = `Error: ${error.message}`;
      element.style.border = "2px solid red";
      return false;
    }
  }
})