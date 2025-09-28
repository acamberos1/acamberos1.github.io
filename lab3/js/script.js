document.querySelector("#qzBtn").addEventListener("click", gradeQuiz); 
// the code above links the html button to run the function defined below
// const result1 = document.querySelector("#result1");
// const result2 = document.querySelector("#result2");
// const result3 = document.querySelector("#result3");
// const result4 = document.querySelector("#result4");
// const result5 = document.querySelector("#result5");


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









function gradeQuiz() {


    document.querySelector("#validateFB").innerHTML ="";
    // resets feedback
    if(!isFormValid())
    {
        return
    }

    // variables to record values for grading
    let score =0;
  
    let userAnswer1 = document.querySelector('input[name="q1"]:checked').value
    alert(userAnswer1);
    console.log(userAnswer1)
    //grading for q1
    if(userAnswer1 =="Earth")
    {
        document.querySelector("#q1Feedback").innerHTML ="Correct!";
        score+=20;

    }else
        {
           document.querySelector("#q1Feedback").innerHTML = "Incorrect";
           
        }
     document.querySelector("#totalScore").innerHTML= `Total Score: ${score}`;
  
    // let userAnswer2
    let userAnswer2 = document.querySelector("#q2").value
    alert(userAnswer2)
    //let userAnswer3
    let userAnswer3 = document.querySelector("#q3").value
    alert(userAnswer3)
    //let user Answer4
    // let userAnswer4 = document.querySelector("#q4").value
    //    alert(userAnswer4)
    // // let user Answer5
    // let userAnswer5 = document.querySelector("#q5")
    //    alert(userAnswer5)
}
// q1 is id from question1 use similar format for q 2 3 4 5