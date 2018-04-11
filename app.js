// registers service worker
if ('serviceWorker' in navigator) { // browser support check
  navigator.serviceWorker.register('sw.js')
  .then(function(reg) {
    // run if registration worked
    if(reg.installing) {
          console.log('Service worker installing');
        } else if(reg.waiting) {
          console.log('Service worker installed');
        } else if(reg.active) {
          console.log('Service worker active');
        }
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // run if registration failed
    console.log('Registration failed with ' + error);
  });
}

// adding mobile menu to the cog click
const mobMenu = document.querySelector("#mobile-cog").addEventListener("click", loadMenu);

function loadMenu() {
	let menuStatus = document.getElementById("side-nav"),
		menuList = document.getElementsByTagName("li"),
		menuLength = menuList.length;	
		
	if (menuStatus.style.display.match("block")) {
		menuStatus.style.display = "none";
	}
	else {
		menuStatus.style.zIndex = "999";
		menuStatus.style.display = "block";
		menuStatus.style.top = "5px";
		menuStatus.style.position = "fixed";
		for (let i = 0; i < menuLength; i ++) {
			menuList[i].style.boxShadow ="0 1px 0px 0 rgba(0, 0, 0, 0.3), 0 0px 2px 0 rgba(0, 0, 0, 0.3)";
			menuList[i].style.padding = "5px";
			menuList[i].style.backgroundColor = "#e5e5e5";
			menuList[i].style.listStyleType = "none";
		}
		menuList[0].style.borderRadius = "2px 2px 0 0";
		menuList[menuLength-1].style.borderRadius = "0 0 2px 2px";
	}
}


// fixes top bar to the top of the page once scrolled pass logo
window.onscroll = function() {bindMenu()};

function bindMenu() {
	let topMenu = document.getElementById("header-bottom"),
		smallDevice = window.innerWidth;
  	if (document.body.scrollTop >= 70 || document.documentElement.scrollTop >= 70) {
  	  	topMenu.className = "fixed-top";
  	}
  	else {
  	  	topMenu.className = "";
  	}
}

// adds copy/date to the footer
window.onload = function copid() {
	let d = new Date().getFullYear();
	document.querySelector('footer').innerHTML = "&copy; ČĎŠ " + d;
}