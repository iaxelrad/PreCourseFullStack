//---------------Console.log Form Data----------------------------

const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const eMailInput = document.getElementById('myemail');
const commentInput = document.getElementById('comments');
const selectInput = document.getElementById('reasons');
document.getElementById('form').addEventListener('submit', function (e) {
  //prevent the normal submission of the form
  e.preventDefault();

  console.log(`First Name: ${firstNameInput.value}`);
  console.log(`Last Name: ${lastNameInput.value}`);
  console.log(`Email: ${eMailInput.value}`);
  console.log(`Comment: ${commentInput.value}`);
  console.log(`Reasons for visit: ${selectInput.value}`);
});

//---------------Console.log Form Data----------------------------

//------------------Footer Text Array-----------------------------

// const wrdArr = ['HTML, ', 'CSS ', 'and', ' JavaScript.'];
// const sen = 'This page was built using ' + wrdArr.join('');
// document.getElementById("made-by").innerHTML = sen;

//------------------Footer Text Array-----------------------------
