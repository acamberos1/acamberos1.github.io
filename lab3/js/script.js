document.querySelector("#qzBtn").addEventListener("click", gradeQuiz); 


function gradeQuiz() {
    let userAnswer1 = document.querySelector('input[name="q1"]:checked').value
    alert(userAnswer1);
}