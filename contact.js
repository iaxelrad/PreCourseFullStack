
//---------------Console.log Form Data----------------------------

var firstNameInput = document.getElementById('firstName');
var lastNameInput = document.getElementById('lastName');
var eMailInput = document.getElementById('myemail');
var commentInput = document.getElementById('comments');
var selectInput = document.getElementById('reasons');
document.getElementById('form').addEventListener('submit', function (e) {

//prevent the normal submission of the form
e.preventDefault();

console.log(`First Name: ${firstNameInput.value}`);
console.log(`Last Name: ${lastNameInput.value}`)
console.log(`Email: ${eMailInput.value}`);
console.log(`Comment: ${commentInput.value}`);
console.log(`Reasons for visit: ${selectInput.value}`);  

});

//---------------Console.log Form Data----------------------------

//------------------Footer Text Array-----------------------------

const wrdArr = ['HTML, ', 'CSS ', 'and', ' JavaScript.'];
const sen = 'This page was built using ' + wrdArr.join('');
document.getElementById("made-by").innerHTML = sen;

//------------------Footer Text Array-----------------------------