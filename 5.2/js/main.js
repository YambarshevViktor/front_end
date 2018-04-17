function showMore(){
	var serials_button = document.getElementById('films_button');
	var serials_show = document.getElementById('serials_showmore');

	serials_button.style.display = 'none';
	serials_show.style.display = 'flex';
	serials_show.style.opacity = '1';
}

function modalWindow(){
	var modal = document.getElementById('my_modal');

	modal.style.display = 'block';
}

function closModalWindow(){
	var modal = document.getElementById('my_modal');

    modal.style.display = 'none';
}

window.onclick = function(event){
	var modal = document.getElementById('my_modal');

	if (event.target == modal){
		modal.style.display = 'none';
	}
}

function validate() {
	var userName = document.getElementById('userName');
	var userEmail= document.getElementById('email');

	if(!userName.value) {
		userName.style.border = '2px solid red';
	}

	if(!userEmail.value) {
		userEmail.style.border = '2px solid red';
	}
}

function nameOnclick(){
	var userName = document.getElementById('userName');

	userName.style.border = '2px solid #15a98b';
}

function emailOnclick(){
	var userEmail = document.getElementById('email');

	userEmail.style.border = '2px solid #15a98b';
}
