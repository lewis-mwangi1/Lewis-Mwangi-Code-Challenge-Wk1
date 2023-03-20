function calculateNetSalary() {
    // Get basic salary and benefits
    const basicSalary = parseFloat(document.getElementById("basic_salary").value);
    const benefits = parseFloat(document.getElementById("benefits").value);
    
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate payee
    let payee = 0;
    if (grossSalary <= 24000) {
      payee = 0;
    } else if (grossSalary <= 40164) {
      payee = (grossSalary - 24000) * 0.1;
    } else if (grossSalary <= 57780) {
      payee = (grossSalary - 40164) * 0.15 + 1616.4;
    } else if (grossSalary <= 78204) {
      payee = (grossSalary - 57780) * 0.2 + 4190.4;
    } else if (grossSalary <= 100000) {
      payee = (grossSalary - 78204) * 0.25 + 8162.4;
    } else {
      payee = (grossSalary - 100000) * 0.3 + 13912.4;
    }}