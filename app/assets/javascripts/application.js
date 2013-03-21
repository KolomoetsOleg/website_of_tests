// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function timer($hour, $min, $sec, $page) {

var outTimer = document.getElementById('timer'),
	dateEnd = (new Date()).setHours($hour, $min, $sec);

setInterval(function () {
  var diff = Math.round((dateEnd - new Date()) / 1000), // разница
	  text = '';
  
  if (diff < 0) {

	//location.replace('/quests/finish/'+$page);
	
  } else {
	text = Math.floor(diff / 3600) + ' час. ' +  Math.floor(diff / 60) % 60 + ' мин.'+  Math.floor(diff) % 60 + ' сек.';
  }
  
  outTimer.innerHTML = text;
  
}, 1000);
};
