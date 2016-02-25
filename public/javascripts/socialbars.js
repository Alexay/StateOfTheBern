$(document).ready(function() {
	
	// ["Label" , "website link" , "bar color" , "bar image"]
	var social = [
        ["twitter", 	"https://twitter.com/home?status=http%3A//StateOfTheBern.com%0ABernie's%20polling%20data%20visualized%20on%20a%20map!", 	"#55acee", "images/twitter.png"],
	    ["facebook", 	"https://www.facebook.com/sharer/sharer.php?u=http%3A//StateOfTheBern.com", 			"#3B5998", "images/facebook.png"],
	    ["google+", 	"https://plus.google.com/share?url=http%3A//StateOfTheBern.com", 		"#dd4b39", "images/google_plus.png"],
	    ["github", 	"https://github.com/Alexay/StateOfTheBern", 		"#171515", "images/github.png"]
	    ];

////////////////////////////////////////////////	
//// DO NOT EDIT ANYTHING BELOW THIS LINE! /////
////////////////////////////////////////////////
		
	$("#socialside").append('<ul class="mainul"></ul>');
	
	/// generating bars
	for(var i=0;i<social.length;i++){
	$(".mainul").append("<li>" + '<ul class="scli" style="background-color:' + social[i][2] + '">' +
						'<li>' + social[i][0] + '<img src="' + social[i][3] + '"/></li></ul></li>');
	 				}
	
	/// bar click event
	$(".scli").click(function(){
		var link = $(this).text();		
		for(var i=0;i<social.length;i++){
			if(social[i][0] == link){
				window.open(social[i][1]);
			}
		}		
	});
	
	/// mouse hover event
	$(".scli").mouseenter(function() {	
		$(this).stop(true);	
		$(this).clearQueue();
			$(this).animate({
				left : "140px"
			}, 300);
				
	});

	/// mouse out event
	$(".scli").mouseleave(function(){
		$(this).animate({
			left:"0px"
		},700,'easeOutBounce');
	});

});
