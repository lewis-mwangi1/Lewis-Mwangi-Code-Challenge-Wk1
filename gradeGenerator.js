// Prompt the user for input
  let studentMark = parseInt(prompt("Please enter the student's marks between 0 and 100:"));
  
let input;
 // Determine the grade based on the mark
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
    } else (isNaN(studentMark) || studentMark < 0 || studentMark > 100) 
    console.log("Invalid input. Please enter a CORRECT mark between 0 and 100");
     
    console.log(`The student's grade is ${grade}.`);

