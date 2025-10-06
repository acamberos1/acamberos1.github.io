//Event Listeners
document.querySelector("#zip").addEventListener("change", displayCity)
// change will trigger when cllick out of the box and when u hit enter
document.querySelector("#state").addEventListener("change",displayCounty)

document.querySelector("#username").addEventListener("change",checkUsername);
//links user iinput textbox to the function called checkUsername

document.querySelector("#signupForm").addEventListener("submit", function(event)
{
    validateForm(event);
});
//validateForm() function that we’ll be implementing needs to receive a special parameter that includes all of the information associated with the actual event.  The next step explains why we need it.



document.querySelector("#password")
  .addEventListener("focus", suggestPassword, { once: true });





function validateForm(e) 
{
    let isValid = true;
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let password2 = document.querySelector("#password2").value;
// Clear previous error messages
    document.querySelector("#usernameError").innerHTML = "";


     let passwordErr = document.querySelector("#passwordError");
  passwordErr.textContent = ""; // clear old
    
    
    
    // Username validation
    if (username.length == 0) {
        document.querySelector("#usernameError").innerHTML = "Username is required";
        document.querySelector("#usernameError").style.color = "red";
        isValid = false;
    } else if (username.length < 3) {
        document.querySelector("#usernameError").innerHTML = "Username must be at least 3 characters";
        document.querySelector("#usernameError").style.color = "red";
        isValid = false;
    }
    
    // Password validation
    if (password.length === 0) {
        passwordErr.textContent = "Password is required";

        passwordErr.style.color = "red";
        isValid = false;
       
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters");
        isValid = false;
    } else if (password !== password2) {
        passwordErr.textContent = "retype password must match";
        passwordErr.style.color = "red";
        isValid = false;
    }
    
    if (!isValid) {
        e.preventDefault();
    }
}



displayStates();

async function displayCity() {
 document.querySelector("#city").textContent = "";
            document.querySelector("#lat").textContent = "";
            document.querySelector("#long").textContent = "";
            document.querySelector("#misZip").textContent ="";


    let zipCode = document.querySelector("#zip").value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            if(!data)
            {
            document.querySelector("#misZip").textContent ="Not found";
            return;
            }
            
            console.log(data);
            document.querySelector("#city").textContent = data.city;
            document.querySelector("#lat").textContent = data.latitude;
            document.querySelector("#long").textContent = data.longitude;
            
        } catch (parseError) {
            console.log("JSON Parsing error " + parseError);
        }
    } catch (error) {
        console.log("Network error " + error);
    }
    //alert(zipCode)
}

async function displayCounty()
{


    let state = document.querySelector("#state").value;
  
    let url =`https://csumb.space/api/countyListAPI.php?state=${state}`
    // change ca 
console.log("in display county");
let response = await fetch(url);
let data = await response.json();
console.log(data);

document.querySelector("#county").innerHTML ="";
// fast way of clearing out old results of county for the drop down

  for (let i of data) {
                let optionElement = document.createElement("option");
                // option is creating a new html element it doesnt need id like the state/county it gets from the api
                optionElement.textContent = i.county;
                optionElement.value = i.county;

                document.querySelector("#county").append(optionElement);
                // appends info to county drop down menu list
            }

}



async function displayStates() 
  {
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);

            for (let i of data) {
                let optionElement = document.createElement("option");
                optionElement.textContent = i.state;
                optionElement.value = i.usps;
                // usps specific to api information, has usps value

                document.querySelector("#state").append(optionElement);
            }

        } catch (parseError) {
            console.log("JSON Parsing error " + parseError);
        }
    } catch (error) 
    {
        console.log("Network error " + error);
    }
    //alert(zipCode)

}

async function suggestPassword() {
  const url = "https://csumb.space/api/suggestedPassword.php?length=8";
  try {
    let response = await fetch(url);
    let data = await response.json();
    // show suggestion inline (no alert spam)
    document.querySelector("#passwordSuggestion").textContent =
      "Suggested password: " + data.password;
  } catch (err) {
    console.log("Error fetching password: " + err);
  }
}



async function checkUsername() {
    let username = document.querySelector("#username").value;
    let url = `https://csumb.space/api/usernamesAPI.php?username=${username}`;
    let response = await fetch(url);
    let data = await response.json();
    let usernameError = document.querySelector("#usernameError")
    if (data.available) {
        usernameError.innerHTML = "Username available!";
        usernameError.style.color = "green";  // FIXED: was computedStyleMap.color
    } else {
        usernameError.innerHTML = "Username taken";
        usernameError.style.color = "red";
    }
}
// i lea
