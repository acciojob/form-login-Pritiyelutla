
var form = document.getElementById("form1");
    //Write your code here
	let fname = document.getElementById("fname");
	let lname = document.getElementById("lname");

	form.addEventListener("submit",function(e)
    {
        e.preventDefault();
        alert(fname.value + " "+lname.value);
    });