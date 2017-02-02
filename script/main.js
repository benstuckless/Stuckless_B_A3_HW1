
(function(){

	var theImages = document.querySelectorAll('.image-holder'),
		theHeading = document.querySelector('.heading'),
		theImage = document.querySelector('.main-copy img'),
		theSubhead = document.querySelector('.main-copy h2'),
		theText = document.querySelector('.main-copy p'),
		appliedClass; 
	
	function changeElements() {
		theHeading.classList.remove(appliedClass); 
		theHeading.classList.add(this.id);
		theSubhead.classList.remove(appliedClass); 
		theSubhead.classList.add(this.id); 
		theImage.classList.remove(appliedClass); 
		theImage.classList.add(this.id);
		theImage.src="images/" + this.id + ".jpg";
		appliedClass = this.id; 
		theSubhead.firstChild.nodeValue = dynamicContent[this.id].headline; 
		theText.firstChild.nodeValue = dynamicContent[this.id].text;
		theImage.firstChild.nodeValue = dynamicContent[this.id].image; 
	}
	
	[].forEach.call(theImages, function(image) {
		image.addEventListener("click", changeElements, true);
	});

	theSubhead.firstChild.nodeValue = dynamicContent['home'].headline; 
	theText.firstChild.nodeValue = dynamicContent['home'].text; 
	theImage.firstChild.nodeValue = dynamicContent['home'].image; 
	theHeading.classList.add('home');
})();
