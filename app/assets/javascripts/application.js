// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require turbolinks
//= require_tree .

$(document).ready(function () {
	$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').focus()
	})
	
	var elem = $('#nav-top');
	var distance = elem.offset().top;
	    $window = $(window);

	$window.scroll(function() {
	    if ( $window.scrollTop() >= distance ){
	        // Your div has reached the top
	        elem.removeClass("navbar-static-top");
	        elem.addClass("navbar-fixed-top dummy");
	    }
	    else{
	        elem.removeClass("navbar-fixed-top dummy");
	        elem.addClass("navbar-static-top");
	    }
	});

	$(document).on('click', 'a', function(event){
		if($("#header > a")[0].parentElement.id !== "header"){
		    event.preventDefault();

		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 500);
		}
	});
});

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
  }