var map_btn = document.querySelector(".text-map");
var map = document.querySelector(".map-scheme")
			
map_btn.addEventListener("click", function(event){
	event.preventDefault();
	map.classList.toggle("map-scheme-open");
});
