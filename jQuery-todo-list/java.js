// this holds the value of the number of items in Our List
var counter = 3;

// This line selects the element with the class .marquee and turns it into a scrolling marquee!
$('.marquee').marquee();


// this function is listening for a click on the element with and id of #target
$( "#target" ).click(function() {
  // when the button is clicked and the function is run it tells the browswer to drop down an alert!
  alert("You clicked the alert buton");
});

// this line is listening for a click on the element with the id #other. 
$( "#other").click(function() {
  // when the button is clicked the function adds to the counter by 1
  counter++;
  // then finds the element with the id #our-list and adds a new <li/> with a class .new and brings in the value of counter to it. 
  $( "#our-list").append(`<li class="new">New Item ${counter}</li>`); 
})
