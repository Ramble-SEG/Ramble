// Find HTML element based off ID
//var caption = document.getElementById("caption");

// Change content of said element
//caption.textContent = "Subscription Plans";

// text in html file

var featuresLink = document.getElementById("featuresLink");
featuresLink.addEventListener("mouseover", function(){
    this.style.backgroundColor = "#002859";
});

featuresLink.addEventListener("mouseout", function(){
    this.style.backgroundColor = "#0edbb0";
});

var pricingLink = document.getElementById("pricingLink");
pricingLink.addEventListener("mouseover", function(){
    this.style.backgroundColor = "#002859";
});

pricingLink.addEventListener("mouseout", function(){
    this.style.backgroundColor = "#0edbb0";
});

var contactLink = document.getElementById("contactLink");
contactLink.addEventListener("mouseover", function(){
    this.style.backgroundColor = "#002859";
});

contactLink.addEventListener("mouseout", function(){
    this.style.backgroundColor = "#0edbb0";
});



