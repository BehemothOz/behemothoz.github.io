var menu = document.querySelector(".btn-menu");
var nav = document.querySelector(".main-navigation")
			
	menu.addEventListener("click", function(event){
		event.preventDefault();
		nav.classList.toggle("main-navigation-visible");
	});
	