// Select all dropdowns and their associated lists
const dropdown = document.querySelectorAll('.dropdown');
const optionLists = document.querySelectorAll('.list');

// Loop through each dropdown
dropdown.forEach((dropdown, index) => {
  const optionList = optionLists[index]; // Get the corresponding options list for this dropdown
  
  // Show options when mouse hovers over the dropdown
  dropdown.addEventListener('mouseover', () => {
    dropdown.style.backgroundColor = 'rgba(255, 255, 255, 0.404)';
    optionList.classList.add('show');
  });

  // Hide options when mouse moves off the dropdown
  dropdown.addEventListener('mouseout', () => {
    dropdown.style.backgroundColor = 'rgba(0, 0, 0, 0.55)';
    optionList.classList.remove('show');
  });

  // Prevent hiding options when hovering over the options list
  optionList.addEventListener('mouseover', () => {
    optionList.classList.add('show');
  });

  // Hide options when mouse moves off the options list
  optionList.addEventListener('mouseout', () => {
    optionList.classList.remove('show');
  });

//function to change language
  function changeLanguageFont(language) {
    if (language === 'Hindi') {
      document.documentElement.style.fontFamily = 'hindi'; // Apply Hindi font
      console.log("click on hindi");
      
    } 
    else if (language === 'Gujarati') {
      document.documentElement.style.fontFamily = 'gujrati'; // Apply Gujarati font
      console.log("click on gujarati");

    } 
    else {
      document.documentElement.style.fontFamily = "'Ubuntu', sans-serif"; // Default English font
      console.log("click on english");
      
    }
  }



  // Handle clicking on an option
  optionList.addEventListener('click', (e) => {
    const value = e.target;
  
    if (value.classList.contains('text')) {
      // Change font when a language is selected
      changeLanguageFont(value.id);
  
      // Update the dropdown's display text
      dropdown.innerHTML = value.innerHTML;
  
      // Hide options after selecting
      optionList.classList.remove('show');
    }
  });
});


//code for the click on sign in NAV bar

const sigin = document.getElementById('sigin');

sigin.addEventListener('mouseover', () => {
  sigin.style.backgroundColor = 'rgba(255, 255, 255, 0.404)';
});

sigin.addEventListener('mouseout', () => {
  sigin.style.backgroundColor = 'red';
})

sigin.addEventListener('click', () => {
  window.location.href = "https://www.netflix.com/login";
});

//check the emali input and if its full/correct and click get start then locate to registration form

const emailInputs = document.querySelectorAll('.email');  // Query all email inputs
const getSignIns = document.querySelectorAll('.main_sigin');  // Query all sign-in buttons
const emailValue = emailInputs;

const disposableDomains = ['tempmail.com', '10minutemail.com', 'mailinator.com', 'fakeinbox.com', 'guerrillamail.com'];
const validDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'protonmail.com'];

const isDisposableEmail = (email) => {
  const domain = email.split('@')[1];
  return disposableDomains.includes(domain);
};

const isValidDomain = (email) => {
  const domain = email.split('@')[1];
  return validDomains.includes(domain);
};

// Iterate over all sign-in buttons and add event listeners
getSignIns.forEach((button, index) => {
  button.addEventListener('click', () => {
    // console.log(`Button ${index + 1} clicked`);

    const emailValue = emailInputs[index].value.trim();  // Get corresponding email input
    const emailRegex = /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;  // Email regex

    if (emailValue === "") {
      alert("Please enter your email address.");
      emailInputs[index].focus();
    } 
    else if (!emailRegex.test(emailValue)) {
      alert("Please enter a valid email address.");
      emailInputs[index].focus();
    } 
    else if (isDisposableEmail(emailValue)) {
      alert("Please use a permanent email address, not a disposable one.");
      emailInputs[index].focus();
    } 
    else if (!isValidDomain(emailValue)) {
      alert("Please use an email from a trusted provider.");
      emailInputs[index].focus();
    } 
    else {
      // alert("Email is valid and looks good!");
      console.log("The E-mail is correct");
      window.location.href = "https://www.netflix.com/signup/registration?locale=en-IN";
      console.log(emailValue);
    }
  });
});




// ADD BG SHADOW RED ON IMAGE 
var moves = [
  { no: "1",img: "./photos/1.jpg"},
  { no: "2",img: "./photos/2.jpg"},
  { no: "3",img: "./photos/3.jpg"},
  { no: "4",img: "./photos/4.jpg"},
  { no: "5",img: "./photos/5.jpg"},
  { no: "6",img: "./photos/6.jpg"},
  { no: "7",img: "./photos/7.jpg"},
  { no: "8",img: "./photos/8.jpg"},
  { no: "9",img: "./photos/9.jpg"},
  { no: "10",img: "./photos/10.jpg"}
]

//functon to add the data in html using innerhtml function, to showcast on webpage
var clutter = "";
moves.forEach(function(elem){
  clutter += `<span class="num">${elem.no}</span>
  <img src=${elem.img} class="mov" id="img">`
  // console.log(elem);
            
});

document.querySelector('.con').innerHTML = clutter;//prints on webpage

// Select all images with the class 'mov'
const imgElements = document.querySelectorAll('.mov'); 

imgElements.forEach(img => {
  // Hover effect
  // console.log(img);
  
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.1)'; // Enlarge the image
    img.style.boxShadow = '0px 0px 40px red'; // Add shadow effect
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)'; // Reset image size
    img.style.boxShadow = ''; // Remove shadow
  });



 // Listen for click events on each image
 img.addEventListener("click", (event) => {
  const clickedImage = event.target; // The clicked image element
  const clickedSrc = clickedImage.src; // The `src` of the clicked image
  // console.log("Clicked image src:", clickedSrc);

  const pop = document.querySelector(".outter-mov-box");
  const bgimg = document.getElementById("pop-img");

  // Show the popup with the clicked image
  pop.style.display = "flex";
  bgimg.style.backgroundImage = `url(${clickedSrc})`;

  // Array of descriptions with `img` matching each movie
  const descriptions = [
    { img: "http://127.0.0.1:5500/photos/1.jpg", year: "2024", age: "*U/A 7+", cato1:"*Movie", cato2:"*Thrillers", cato3: "*Dramas",cato4: "", content: "A middle-class bank clerk who longs to trade stability for adventure gets more than he bargained for when he unexpectedly becomes a wealthy man" },

    { img: "http://127.0.0.1:5500/photos/2.jpg", year: "2024", age:"*U/A 13+", cato1: "*Movie", cato2: "*Thrillers", cato3: "*Dramas",cato4: "", content: "After an unsolved diamond heist, a hard-nosed cop's pursuit of his key suspect turns into obsession, until they finally face each other—and the truth" },

    { img: "http://127.0.0.1:5500/photos/3.jpg", year: "2024", age:"*U/A 16+", cato1:"*Movie", cato2:"*Action", cato3: "*Daramas",cato4: "", content: "A mighty sea warrior takes a violent stand against the criminal deeds of his village. Years later, his mild-mannered son walks a path of his own" },

    { img: "http://127.0.0.1:5500/photos/4.jpg", year: "2024", age:"*U/A  +", cato1:"*Movie", cato2:"*Action", cato3: "",cato4: "",  content:"Dismayed by corruption and violence, a virtuous police officer becomes a masked vigilante to deliver lethal justice to criminals and crooked cops alike." },

    { img: "http://127.0.0.1:5500/photos/5.jpg", year: "2024", age:"*U/A  +", cato1:"*Movie", cato2:"*Kids", cato3:"*Fantasy", cato4: "*Musicals", content:"When a powerful spell turns her parents into giant monsters, a teenage princess must journey into the wild to reverse the curse before it's too late." },

    { img: "http://127.0.0.1:5500/photos/6.jpg", year: "2024", age:"*U/A  +", cato1:"*Movie", cato2:"*Dramas", cato3:"*Thrilling", cato4: "*Mysteries", content:"A puzzling investigation leads a no-nonsense cop down a dark path involving the vicious rivalry between twin sisters and the volatile man they both love" },

    { img: "http://127.0.0.1:5500/photos/7.jpg", year: "2024", age:"*U/A  +", cato1:"*Movie", cato2:"*Comedies", cato3:"*Romance",cato4: "", content:"After discovering their significant others are siblings, two resentful exes must spend Christmas under one roof — while hiding their romantic history." },

    { img: "http://127.0.0.1:5500/photos/8.jpg", year: "2024", age:"*U/A  +", cato1:"*Movie", cato2:"*Dramas",
      cato3: "", cato4: "", content:"A man makes a bittersweet journey back to his hometown after 22 years and meets an insistent yet kindhearted relative whose name he can't remember." },

    { img: "http://127.0.0.1:5500/photos/9.jpg", year: "2024", age: "*U/A  +", cato1: "*Movie", cato2: "*Dramas", cato3: "*Action",cato4: "", content: "When a notorious gang of bikers recruits her brother for a heist, a former motocross champion must face her deepest fears to keep her family safe." },

    { img: "http://127.0.0.1:5500/photos/10.jpg", year: "2024", age: "*U/A  +", cato1:"*Movie", cato2:"*Acventure", cato3:"*Sci-Fi",cato4: "*Action", content:"When the Flash uses his unique powers to alter a tragedy in his past, he causes a time paradox that could devastate the present — and the future" }
  ];

  // Match the `src` of the clicked image with the `img` in descriptions
  const selectedDescription = descriptions.find((desc) => {
    // console.log("Comparing with:", desc.img);
    return clickedSrc.includes(desc.img); // Check if `clickedSrc` includes `desc.img`
  });

  // console.log("Selected description:", selectedDescription);

  const descriptionContainer = document.querySelector(".mov-discrip");

  if (selectedDescription) {
    // Populate the description in the popup
    descriptionContainer.innerHTML = `
      <p>
        <span>${selectedDescription.year}</span>
        <span>${selectedDescription.age}</span>
        <span>${selectedDescription.cato1} </span>
        <span>${selectedDescription.cato2}</span>
        <span>${selectedDescription.cato3}</span>
        <span>${selectedDescription.cato4}</span>
      </p>
      <h5>${selectedDescription.content}</h5>
      <button id="innerSigin">Get Started &gt;</button>
      <p>Creat Or Restart Your Membership</p>
    `;
  } else {
    // If no description matches
    descriptionContainer.innerHTML = `<p>No description available for this movie.</p>`;
  }

  // Disable page scroll when the popup is open
  document.body.style.overflowY = "hidden";
 });

  // Close the popup on cross click
  const cross = document.getElementById('cross');  // Query only once for the cross element
  const pop = document.querySelector('.outter-mov-box');

  // Hover effect for cross (to change color and style)
  cross.addEventListener('mouseover', () => {
    cross.style.backgroundColor = 'red';
    cross.style.boxShadow = '0px 0px 15px red';
  });
  
  cross.addEventListener('mouseout', () => {
    cross.style.backgroundColor = '';
    cross.style.boxShadow = '';
  });
  
  // Close popup when cross is clicked
  cross.addEventListener('click', () => {
    pop.style.display = 'none';  // Hide the popup
    document.body.style.overflowY = '';  // Restore scrolling
  });

  
});




// Select navigation buttons to navigate to perticular section

const tren = document.getElementById('tren');
const plan = document.getElementById('plans');
const faq = document.getElementById('faq');
// const button = document.querySelectorAll('con-men');

tren.addEventListener('click', () =>{
  console.log('click');
  
  window.scrollTo({
    top: 445,
    left: 0,
    behavior: 'smooth'
});
});
plan.addEventListener('click', () =>{ 
  console.log('click');
  
  window.scrollTo({
    top: 885,
    left: 0,
    behavior: 'smooth'
  });
});
faq.addEventListener('click', () =>{
    window.scrollTo({
    top: 1310,
    left: 0,
    behavior: 'smooth'
  });
});


//display ans for the question by clicking

const questions = document.querySelectorAll('.que');

questions.forEach(question => {
  question.addEventListener('mouseover', () => {
    question.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
  });

  question.addEventListener('mouseout', () => {
    question.style.backgroundColor = '';
  });

  question.addEventListener('click', () => {
    console.log("Question clicked");

    const clickedAnswer = question.nextElementSibling;
    const plus = question.querySelector('.plus'); 

  
    if (clickedAnswer.style.display === 'flex') {
      clickedAnswer.style.display = 'none';
      console.log("Answer hidden");

      plus.classList.remove('rotate'); 
    } 

    else {
    
      document.querySelectorAll('.ans').forEach(ans => {
        ans.style.display = 'none';
      });

      document.querySelectorAll('.plus').forEach(plus => {
        plus.classList.remove('rotate');
      });

      clickedAnswer.style.display = 'flex';
      console.log("Answer displayed");

      plus.classList.add('rotate');

      clickedAnswer.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  });
});




