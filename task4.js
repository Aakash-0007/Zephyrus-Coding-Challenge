/* Task 4 (Front-End Specific): Simple Interactive Feature

Create a small HTML page with the following features:

1. A button that, when clicked, changes the text of a heading (use JavaScript to manipulate the DOM).
2. Add some basic CSS to style the page and button (you can use inline or external CSS).
3. Ensure the page looks presentable (though it doesn’t need to be extensively styled, just functional).
*/

document.getElementById('changeTextButton').addEventListener('click', function () {
  const heading = document.getElementById('heading');
  heading.textContent = 'You clicked the button!';
});


/* 
In this task, I added interactivity to the webpage using JavaScript. When the user clicks the button,
a JavaScript function is triggered that changes the text of the heading (<h1>) from "Hello Zephyrus!"
to "You clicked the button".
This is accomplished by selecting the button using its ID and attaching a click event listener,
which modifies the heading's text when activated.
*/
