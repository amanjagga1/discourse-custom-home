export default Ember.Component.extend({
	didInsertElement() {
	  this._super(...arguments);
	  Ember.$(window).on("load", function() {
  		var home =$('#main-outlet')[0];
	    home.className += " homePage";
	    startTimer(34);
	  });
	},
	willDestroyElement() {
		var home = $('#main-outlet')[0];
	    home.className = " wrap";
	}
});
function startTimer(remainingTime) {
	if (remainingTime < 0) {
		window.location.pathname = Discourse.getURL("/");
		return;
	}
	if (remainingTime < 6) {
		$('#firstScreen')[0].style= "display:none";
		$('#secondScreen')[0].style= "display:block";
	}
	$("#time")[0].innerHTML = '(' + remainingTime + ')';
	setTimeout(function(){ startTimer(remainingTime-1) }, 1000);
};
