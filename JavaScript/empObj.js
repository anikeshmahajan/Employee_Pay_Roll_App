const salary = document.querySelector('#salary');
const output = document.querySelector('.Salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});


const text = document.querySelector('#name');
const textError = document.querySelector(".text-error");         
text.addEventListener('input',function(){
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z0-9\\s]{2,}$");
    if(nameRegex.test(text.value)) textError.textContent= " ";
    else textError.textContent="Name is Incorrect";
});




const form=document.getElementById('form');

form.addEventListener('submit',function(event)
{
    event.preventDefault();
    var name = document.getElementById('name').value;
    var profile = document.querySelector('input[name = profile]:checked').value;
     var gender = document.querySelector('input[name = gender]:checked').value;
     var department = document.querySelector('input[type = checkbox]:checked').value;
     var salary = document.getElementById("salary").value;
     var notes = document.getElementById("notes").value;
     var startDate = new Date(parseInt(document.getElementById("year").value), parseInt(document.getElementById("month").value), parseInt(document.getElementById("day").value));

     console.log("Name : "+name + "\n Profile :" +profile + "\n Gender :" +gender +
     "\n Depart :" + department + "\n Salary :"+ salary + "\n Notes : "+ notes
     + "StartDate :"+ startDate )

    
}); 


