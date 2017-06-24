"use strict";
var portfolio = {
	init: function () {
	var self = this;
	$('#statement').hide(0, function() {
		$("div.leftSection").slideDown('slow', function () {
			console.log(location.hash.slice(1,99));
			switch (location.hash.slice(1,99)) {
				case "skills":
				$('div#skills').slideDown('fast');
				 self.setTitle("Education and Skills");
				 break;
				case "companies":
				$('#companies').slideDown('fast');
				 self.setTitle("Companies I've worked for");
				 break;
				case "hateMachine":
				$('#hateMachine').slideDown('fast');
				 self.setTitle("Internet Hate Machine - UI edition");
				break;
				case "resume":
				$('div#resume').slideDown('fast');
				self.setTitle("Resume");
				break;
				case "frontend":
				$('div#frontend').slideDown('fast');
				 self.setTitle("Front end Samples");
				break;
				case "backend":
				$('div#backend').slideDown('fast');
				self.setTitle("Back end Samples");
				break;
				case "flash":
				$('div#flash').slideDown('fast');
			 	self.setTitle("Flash Samples");
			 	break;
			 	default:
				$("#statement").fadeIn('slow');
				self.setTitle("Personal Statement");
			}
		});
	});
	self.setEvents();
	self.didYouKnow();
	},
	setEvents: function () {
		var self = this;
		$('.educationHref').on("click", function() {
			console.log("hi")
			self.clearFades();
			 $('div#skills').slideDown('fast');
			 self.setTitle("Education and Skills");
		});
		
		$('.companyHref').on("click", function() {
			self.clearFades();
			 $('#companies').slideDown('fast');
			 self.setTitle("Companies I've worked for");
		});
		$('.boredHref').on("click", function() {
			self.clearFades();
			 $('#hateMachine').slideDown('fast');
			 self.setTitle("Internet Hate Machine - UI edition");
		});
		$('.resumeHref').on("click", function() {
			self.clearFades();
			 $('div#resume').slideDown('fast');
			 self.setTitle("Resume");
		});
		$('.personalHref').on("click", function() {
			self.clearFades();
			 $('div#statement').slideDown('fast');
			 self.setTitle("Personal Statement");
		});
		
		$('.frontHref').on("click", function() {
			self.clearFades();
			 $('div#frontend').slideDown('fast');
			 self.setTitle("Front end Samples");
		});
		
		$('.backHref').on("click", function() {
			self.clearFades();
			 $('div#backend').slideDown('fast');
			 self.setTitle("Back end Samples");
		});
		
		$('.flashHref').on("click", function() {
			self.clearFades();
			 $('div#flash').slideDown('fast');
			 self.setTitle("Flash Samples");
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
		$('#statement,#hateMachine,#skills,#companies,#resume,#frontend,#backend,#flash').slideUp('slow').delay(600);
		$("a").blur();
	}
}
portfolio.init();