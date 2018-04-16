function showMore(){
	var serials_button = document.getElementById('films_button');
	var serials_show = document.getElementById('serials_showmore');

	serials_button.style.display = 'none';
	serials_show.style.display = 'flex';
	serials_show.style.opacity = '1';
}

var modal = document.getElementById('my_modal');
var button = document.getElementById('my_vk');
var close_button = document.getElementsByClassName('close')[0];

button.onclick = function(){
	modal.style.display = "block";
}

close_button.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
   if (event.target == modal){
     modal.style.display = "none";
   }
}
