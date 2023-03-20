// Prompt the user for input
function calculateGrade() {
  let studentMark = parseInt(document.getElementById("mark").value);
  let grade;

  if (studentMark >= 79 && studentMark <= 100) {
    grade = 'A';
  } else if (studentMark >= 60 && studentMark < 79) {
    grade = 'B';
  } else if (studentMark >= 50 && studentMark < 60) {
    grade = 'C';
  } else if (studentMark >= 40 && studentMark < 50) {
    grade = 'D'; 
  } else if (studentMark >= 0 && studentMark < 40) {
    grade = 'E';
  } else {
    grade = "Invalid input. Please enter a CORRECT mark between 0 and 100";
  }

  document.getElementById("grade").innerHTML = `The student's grade is ${grade}.`;
}

