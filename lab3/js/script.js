
document.querySelector("#qzBtn").addEventListener("click", gradeQuiz); 
// the code above links the html button to run the function defined below



 function isFormValid()
{
    const feedback =document.querySelector("#validateFB")
    let isValid = true;
     const q1Checked = document.querySelector('input[name="q1"]:checked');
    if(!q1Checked)
    {
        isValid = false;
        feedback.textContent = "Question one unanswered";
    }
    return isValid
    // returns is valid status after if statement runs if false/true

}




let attempts= localStorage.getItem("tryCount");


displayQ5Options();

function displayQ5Options(){ 
    let q5OptionsArr =["otter", "cat", "seal", "dog"];
q5OptionsArr = _.shuffle(q5OptionsArr);
    for (let i=0; i<q5OptionsArr.length;i++)
        {
            document.querySelector("#q5Choices").innerHTML += `<input type ="radio" name="q5" id="${q5OptionsArr[i]}" value="${q5OptionsArr[i]}"> <label for="${q5OptionsArr[i]}"> ${q5OptionsArr[i]}</label>`;
        }

} // show choices

 


function gradeQuiz() {


    document.querySelector("#validateFB").innerHTML ="";
    // resets feedback
    if(!isFormValid())
    {
        return
    }

    // variables to record values for grading
    let score =0;

  //variables to record the answers
    let userAnswer1 = document.querySelector('input[name="q1"]:checked').value
   
   

    // let userAnswer2
    let userAnswer2 = document.querySelector("#q2").value
     //let userAnswer3
    let userAnswer3 = document.querySelector("#q3").value

      let userAnswer5 = document.querySelector('input[name="q5"]:checked').value

  



    //grading for q1
    if(userAnswer1 =="Earth")
    {
        document.querySelector("#q1Feedback").innerHTML ="Correct!";
        document.querySelector("#markIMG1").innerHTML = '<img src="img/checkmark.png" alt="Correct">';
        score+=20;

    }else
        {
           document.querySelector("#q1Feedback").innerHTML = "Incorrect";
            document.querySelector("#markIMG1").innerHTML = '<img src="img/xmark.png" alt="wrong">';
           
        }
    // grading for q2
    // needs a diff img class
    if(userAnswer2== "cascading style sheets")
    {
          document.querySelector("#q2Feedback").innerHTML ="Correct!";
            document.querySelector("#markIMG2").innerHTML = '<img src="img/checkmark.png" alt="Correct">';
             score+=20;

    } else
    {
         document.querySelector("#q2Feedback").innerHTML = "Incorrect";
          document.querySelector("#markIMG2").innerHTML = '<img src="img/xmark.png" alt="wrong">';
    }

    // grading for 3
    if(userAnswer3 =="J.K Rowling")
    {
         document.querySelector("#q3Feedback").innerHTML ="Correct!";
           document.querySelector("#markIMG3").innerHTML = '<img src="img/checkmark.png" alt="Correct">';
            score+=20;

    }else
    {
         document.querySelector("#q3Feedback").innerHTML ="wrong";
          document.querySelector("#markIMG3").innerHTML = '<img src="img/xmark.png" alt="wrong">';
    }
    // grading for four




    if(document.querySelector("#GW").checked && document.querySelector("#JA").checked && !document.querySelector("#BA").checked && !document.querySelector("#AL").checked)
    {
        document.querySelector("#q4Feedback").innerHTML ="Correct!";
         document.querySelector("#markIMG4").innerHTML = '<img src="img/checkmark.png" alt="Correct">';
          score+=20;

    } else
    {
      document.querySelector("#q4Feedback").innerHTML ="wrong";  
       document.querySelector("#markIMG4").innerHTML = '<img src="img/xmark.png" alt="wrong">';
    }

    //grade for 5

    if(userAnswer5 =="otter")
    {
        document.querySelector("#q5Feedback").innerHTML ="Correct!";
        document.querySelector("#markIMG5").innerHTML = '<img src="img/checkmark.png" alt="Correct">';
        score+=20;

    }else
        {
           document.querySelector("#q5Feedback").innerHTML = "Incorrect";
            document.querySelector("#markIMG5").innerHTML = '<img src="img/xmark.png" alt="wrong">';
           
        }

     document.querySelector("#totalScore").innerHTML= `Total Score: ${score}`;
     document.querySelector("#tryCount").innerHTML = `Total attempts: ${++attempts}`;
     localStorage.setItem("tryCount", attempts);


     if (score > 80) {
    document.querySelector("#totalScore").innerHTML += "<br>Congratulations! Great job!";
}
  
    
   
  
    // // let user Answer5
    // let userAnswer5 = document.querySelector("#q5")
    //    alert(userAnswer5)
}
// q1 is id from question1 use similar format for q 2 3 4 5