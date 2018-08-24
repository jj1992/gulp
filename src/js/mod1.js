function drag(id){
	var ele = document.getElementById(id);
	ele.onmousedown = function(evt){
		e = evt || event;
	}
}
