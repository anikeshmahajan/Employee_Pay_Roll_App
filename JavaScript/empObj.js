const salary = document.querySelector("#salary");
const out =document.querySelector(".Salary-output");
salary.textContent=out.value;
salary.addEventListener('input',function()
{
    out.textContent=salary.value;
});
document.getElementById("submit").onclick = function()
{
    let emp = new EmployeePayRoll()
    emp.name =document.getElementById("name").value;
    emp.profile = document.querySelector('input[name = profile]:checked').value;
    emp.gender = document.querySelector('input[name = gender]:checked').value;
    emp.department = document.querySelector('input[name = department]:checked').value;
    emp.salary = document.getElementById("salary").value;
    emp.notes = document.getElementById("notes").value;
    empl.startDate = new Date(parseInt(document.getElementById("year").value), parseInt(document.getElementById("month").value), parseInt(document.getElementById("day").value));
}