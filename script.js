function getFormvalue() {
	let form = document.getElementById("form1");
    //Write your code here
	let fname = document.getElementById("fname");
	let lname = document.getElementById("lname");

	form.addEventListener("submit",getData());

	getData(){
		Fn = fname.value;
		ln = lname.value;
		alert(fn,"",ln);
	}
	
}
