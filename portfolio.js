//------------------Footer Text Array-----------------------------

const wrdArr = ['HTML', 'CSS', 'and', 'JavaScript.'];
const sen = 'This page was built using ' + wrdArr.join(', ');
document.getElementById("made-by").innerHTML = sen;

//------------------Footer Text Array-----------------------------

//---------------GitHub profile pic and Name Extractor------------

const GITHUB_URL = "https://api.github.com/users/iaxelrad";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const userName = document.getElementById("itamar-axelrad");
    userName.innerText = data.name;
  });

//---------------GitHub profile pic and Name Extractor------------

//----------------------------------------------------------------

// const profilePic = document.querySelector('img')
// profilePic.addEventListener("click", onClick);

// function onClick() {

// profilePic.style.transitionDuration='2s';
// profilePic.style.transitionProperty='transform';
// profilePic.style.transform='rotateY(360deg)';


// }

//----------------------------------------------------------------

//------disabling and enabling Prev & Next btns-------------------

const mapMarker = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53956.202740063236!2d34.825368578342214!3d32.304796162472265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d400493c075d5%3A0x2cd995be543c3f22!2sNetanya!5e0!3m2!1sen!2sil!4v1590131308071!5m2!1sen!2sil ",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151986.00551712498!2d-2.3635479694716452!3d53.4723679051497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C%20UK!5e0!3m2!1sen!2sil!4v1590310253872!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.38441029825!2d-3.8196196483803653!3d40.43813107973299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sil!4v1590131360817!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.75769506606!2d2.277020441486908!3d48.858950680702144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sil!4v1590131409580!5m2!1sen!2sil",
  
]
const countries = [
  'Natanya, Israel',
  'Manchester, UK',
  'Madrid, Spain',
  'Paris, France'
]

const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
const country = document.getElementById("country");
const marker = document.getElementById("google-map");

let currentlySelected = 0;

country.innerText = countries[currentlySelected];
marker.src = mapMarker[currentlySelected];

next.addEventListener('click', function() {
  
  currentlySelected++;
  country.innerText = countries[currentlySelected];
  marker.src = mapMarker[currentlySelected];
    
  if (currentlySelected > mapMarker.length-1) {
    marker.src = mapMarker[0];
    country.innerText = countries[0]
    currentlySelected = 0;
  }

});

prev.addEventListener('click', function() {
     
    if (currentlySelected === 0) {
      currentlySelected = mapMarker.length - 1;
      marker.src = mapMarker[mapMarker.length - 1];
      country.innerText = countries[countries.length - 1]
    } else {
    currentlySelected--;
    country.innerText = countries[currentlySelected];
    marker.src = mapMarker[currentlySelected];
  }
});

//------disabling and enabling Prev & Next btns-------------------

//---------------Console.log Form Data----------------------------


document.getElementById('form').addEventListener('submit', function (e) {

  var firstNameInput = document.getElementById('firstName');
  var lastNameInput = document.getElementById('lastName');
  var eMailInput = document.getElementById('myemail');
  var commentInput = document.getElementById('comments');
  var selectInput = document.getElementById('reasons');
  // //prevent the normal submission of the form
  e.preventDefault();

  console.log(`First Name: ${firstNameInput.value}`);
  console.log(`Last Name: ${lastNameInput.value}`)
  console.log(`Email: ${eMailInput.value}`);
  console.log(`Comment: ${commentInput.value}`);
  console.log(`Reasons for visit: ${selectInput.value}`);  

});

//---------------Console.log Form Data---------------------------

