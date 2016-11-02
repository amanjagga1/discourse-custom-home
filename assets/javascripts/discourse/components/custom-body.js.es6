export default Ember.Component.extend({
	didInsertElement() {
	  this._super(...arguments);
	  Ember.run.scheduleOnce('afterRender', this, function() {
	    var home =$('#main-outlet')[0];
	    home.className += " homePage";
	    startTimer(5);
	  });
	},
	willDestroyElement() {
		console.log("destroying view");
		var home = $('#main-outlet')[0];
	    home.className = " wrap";
	}
});
function startTimer(remainingTime) {
        console.log('inside timer');
		if (remainingTime < 0) {
			//window.location.pathname = Discourse.getURL("/");
			return;
		}
	$("#time")[0].innerHTML = '(' + remainingTime + ')';
	setTimeout(function(){ startTimer(remainingTime-1) }, 1000);
};
