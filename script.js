function DisplayAddEmployeeForm() {
    const addEmployeeForm = document.getElementById('addEmployeeForm');
    addEmployeeForm.style.visibility = "visible";
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = "visible";
  }
  function closeEmployeeForm() {
    const addEmployeeForm = document.getElementById('addEmployeeForm');
    addEmployeeForm.style.visibility = "hidden";
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = "hidden";
  }
  