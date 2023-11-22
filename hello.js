// Create an input field and a button
let input = document.createElement('input');
input.id = 'name';
let button = document.createElement('button');
button.innerHTML = 'Click me';

// Append the input field and button to the body
document.body.appendChild(input);
document.body.appendChild(button);

// Add an event listener to the button
button.addEventListener('click', function() {
    let name = document.getElementById('name').value;
    console.log('Hello ' + name);
});
