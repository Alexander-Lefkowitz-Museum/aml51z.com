"use strict";
var portfolio = {
	init: function () {
	var self = this;
	var self_setTitle = self.setTitle;
	$('#statement').hide(0, function() {
		$("div.leftSection").slideDown('slow', function () {
			console.log(location.hash.slice(1,99));
			switch (location.hash.slice(1,99)) {
				case "skills":
				$('div#skills').slideDown('fast');
				 self_setTitle("Education and Skills");
				 break;
				case "companies":
				$('#companies').slideDown('fast');
				 self_setTitle("Companies I've worked for");
				 break;
				case "hateMachine":
				$('#hateMachine').slideDown('fast');
				 self_setTitle("Internet Hate Machine");
				break;
				case "resume":
				$('div#resume').slideDown('fast');
				self_setTitle("Resume");
				break;
				case "frontend":
				$('div#frontend').slideDown('fast');
				 self_setTitle("Front end Samples");
				break;
				case "backend":
				$('div#backend').slideDown('fast');
				self_setTitle("Back end Samples");
				break;
				case "flash":
				$('div#flash').slideDown('fast');
			 	self_setTitle("Flash Samples");
			 	break;
				case "humor":
				$('div#humor').slideDown('fast');
			 	self_setTitle("Funny ramblings for future writing");
			 	break;
				case "politics":
				$('div#politics').slideDown('fast');
			 	self_setTitle("Politics");
			 	break;
			 	default:
				$("#statement").fadeIn('slow');
				self_setTitle("Personal Statement");
				break
			}
		});
	});
	self.setEvents();
	self.didYouKnow();
	},
	setEvents: function () {
		var self = this;
		var self_setTitle = self.setTitle;
		//yes I know this isn't the most optimal way of doing this, this will be rewritten soon (Alex L)
		$('.educationHref').on("click", function() {
			self.clearFades();
			 $('div#skills').slideDown('fast');
			 self_setTitle("Education and Skills");
		});
		$('.companyHref').on("click", function() {
			self.clearFades();
			 $('#companies').slideDown('fast');
			 self_setTitle("Companies I've worked for");
		});
		$('.humorHref').on("click", function() {
			self.clearFades();
			 $('#humor').slideDown('fast');
			 self_setTitle("Funny ramblings for future writing");
		});

		$('.boredHref').on("click", function() {
			self.clearFades();
			 $('#hateMachine').slideDown('fast');
			 self_setTitle("Internet Hate Machine - UI edition");
		});
		$('.politicsHref').on("click", function() {
			self.clearFades();
			 $('#politics').slideDown('fast');
			 self_setTitle("Politics");
		});
		$('.resumeHref').on("click", function() {
			self.clearFades();
			 $('#resume').slideDown('fast');
			 self_setTitle("Resume");
		});
		$('.personalHref').on("click", function() {
			self.clearFades();
			 $('div#statement').slideDown('fast');
			 self_setTitle("Personal Statement");
		});
		
		$('.frontHref').on("click", function() {
			self.clearFades();
			 $('#frontend').slideDown('fast');
			 self_setTitle("Front end Samples");
		});
		
		$('.recruiterHref').on("click", function() {
			self.clearFades();
			 $('#recruiter').slideDown('fast');
			 self_setTitle("Recruiters please read");
		});
		$('.backHref').on("click", function() {
			self.clearFades();
			 $('#backend').slideDown('fast');
			 self_setTitle("Back end Samples");
		});
		
		$('.flashHref').on("click", function() {
			self.clearFades();
			 $('#flash').slideDown('fast');
			 self_setTitle("Flash Samples");
		});
	},
	didYouKnow: function () {
		var $didYou = $("#didYou"), $liNodes = $didYou.find("li"),
			liIndex = 0;
		$didYou.on("click", function () {
			$liNodes[liIndex].className = "";
			liIndex++;
			($liNodes[liIndex] || $liNodes[liIndex=0]).setAttribute("class","show");
		})
	},
	setTitle: function (title) {
		$('#sectionName').fadeOut('fast', function () {
			this.innerHTML = title;
		}).fadeIn('medium');
	},
	clearFades: function () {
		$("#statement,"
		 +"#hateMachine,"
		 +"#politics,"
		 +"#skills,"
		 +"#recruiter,"
		 +"#humor,"
		 +"#companies,"
		 +"#resume,"
		 +"#frontend,"
		 +"#backend,"
		 +"#flash").slideUp('slow').delay(600);
		$("a").blur();
	}
}
portfolio.init();