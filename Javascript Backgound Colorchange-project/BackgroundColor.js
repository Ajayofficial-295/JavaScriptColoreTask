const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
//   console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'black') {
        body.style.backgroundColor = e.target.id;
      }
  });
});






// Explanation js:

//    1>Selectors and Variables:
//         const buttons = document.querySelectorAll('.button');: This selects all elements in the document that have the class name button and stores them in the buttons variable as a NodeList.
//         const body = document.querySelector('body');: This selects the <body> element and stores it in the body variable.

//     2>Event Handling:
//         buttons.forEach(function (button) { ... });: This iterates over each button in the buttons NodeList using the forEach method.
//         button.addEventListener('click', function (e) { ... });: For each button, it adds a click event listener. When a button is clicked, the function inside addEventListener is executed, and e represents the event object.

//    3> Event Handling Function (function (e) { ... }):
//         Inside the event listener function, e refers to the event object generated when the button is clicked.
//         The function checks the id of the clicked button (e.target.id) to determine which button was clicked.

//     4>Conditional Logic:
//         Depending on the id of the clicked button (e.target.id), the function changes the background color of the <body> element (body.style.backgroundColor = e.target.id;).
//         There are multiple if statements checking for specific id values ('grey', 'white', 'blue', 'yellow').